import React, {useState, useRef, useMemo, useEffect} from 'react';
import {useTasks} from "../hooks/useTasks";
import {useFetching} from "../hooks/useFetching";
import TaskServices from "../API/TaskServices";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import TaskForm from "../components/TaskForm";
import TaskFilter from "../components/TaskFilter";
import TaskList from "../components/TaskList";
import Pagination from "../components/UI/pagination/Pagination";

function Tasks(factory, deps) {

    const  [tasks, setTasks] = useState([
        {id: 1, title: 'task1', body: 'Description'},
        {id: 2, title: 'task2', body: 'Description'},
        {id: 3, title: 'task3', body: 'Description'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedandsearchedTasks = useTasks(tasks, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit ] = useState(10);
    const [page, setPage ] = useState(1);

    const getPageCount = (totalCount, limit) => {
        return Math.ceil(totalCount / limit)
    }



    const [fetchTasks, isTasksLoading, postError] = useFetching( async () => {
        const response = await TaskServices.getAll(limit, page);
        setTasks(response.data);
        const totalCount = (response.headers['x-total-count']);
        setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(() => {
        fetchTasks()
    }, [page]);
    const createTask = (newTask) => {
        setTasks( [...tasks, newTask])
        setModal(false)
    }



    const removeTask = (task) => {
        setTasks(tasks.filter(p => p.id !== task.id))

    }

    const changePage = (page) => {
        setPage(page)

    }

    return (
        <div  className={"App"}>

            <MyButton style={{marginTop: 10}} onClick={() => setModal(true)}>
                Add task
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <TaskForm create={createTask}/>

            </MyModal>
            <hr style={{margin: "15px 0"}}/>
            <TaskFilter filter={filter} setFilter={setFilter}/>
            {postError &&
                <h1>Warning!Err0r! ${postError}</h1>
            }
            {isTasksLoading
                ? <h1>Идет загрузка...</h1>
                : <TaskList remove={removeTask} tasks={sortedandsearchedTasks} title="Spisok moih zadach :"/>

            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Tasks;