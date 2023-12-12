import React, {useState, useRef, useMemo} from 'react';
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
function App(factory, deps) {

    const  [tasks, setTasks] = useState([
        {id: 1, title: 'task1', body: 'Description'},
        {id: 2, title: 'task2', body: 'Description'},
        {id: 3, title: 'task3', body: 'Description'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedTasks = useMemo(() => {
        console.log('Kekekek')
        if(filter.sort) {
            return [...tasks].sort((a,b) => a[filter.sort].localeCompare(b[<filter className="sort"></filter>]))
        }
        return tasks;
    }, [filter.sort, tasks])

    const sortedandsearchedTasks = useMemo(() =>{
        return sortedTasks.filter(task => task.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedTasks])
    const createTask = (newTask) => {
            setTasks( [...tasks, newTask])
            setModal(false)
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
          <TaskList remove={removeTask} tasks={sortedandsearchedTasks} title="Spisok moih zadach :"/>

      </div>
  );
}

export default App;
