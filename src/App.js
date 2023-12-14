import React, {useState, useRef, useMemo, useEffect} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css"
import PostItem from "./components/PostItem";
import TaskList from "./components/TaskList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import TaskForm from "./components/TaskForm";
import postItem from "./components/PostItem";
import MySelect from "./components/UI/select/MySelect";
import TaskFilter from "./components/TaskFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {useTasks} from "./hooks/useTasks";
import axios from "axios";
import TaskServices from "./API/TaskServices";
function App(factory, deps) {

    const  [tasks, setTasks] = useState([
        {id: 1, title: 'task1', body: 'Description'},
        {id: 2, title: 'task2', body: 'Description'},
        {id: 3, title: 'task3', body: 'Description'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedandsearchedTasks = useTasks(tasks, filter.sort, filter.query);
    const [isTasksLoading, setIsTasksLoading] = useState( false);

    useEffect(() => {
        fetchTasks()
    }, []);
    const createTask = (newTask) => {
        setTasks( [...tasks, newTask])
        setModal(false)
    }
    async function fetchTasks() {
        setIsTasksLoading(true);
        const tasks = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setTasks(tasks.data)
        setIsTasksLoading(false);
    }


    const removeTask = (task) => {
            setTasks(tasks.filter(p => p.id !== task.id))

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
          {isTasksLoading
            ? <h1>Идет загрузка...</h1>
            : <TaskList remove={removeTask} tasks={sortedandsearchedTasks} title="Spisok moih zadach :"/>

          }


      </div>
  );
}

export default App;
