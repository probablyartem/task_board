import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import TaskList from "./TaskList";

const TaskForm = ({create}) => {
    const [task, setTask] = useState({title: '', body: ''})


    const addNewTask = (e) => {
        e.preventDefault()
        const newTask = {
            ...task, id: Date.now()
        }
        create(newTask)
        setTask({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                value={task.title}
                type="text"
                onChange={e => setTask({...task, title: e.target.value})}
                placeholder="Name of task"/>

            <MyInput
                value={task.body}
                type="text"
                onChange={e => setTask({...task, body: e.target.value})}
                placeholder="Description of task"/>
            <MyButton onClick={addNewTask}>Create task</MyButton>
        </form>


    );
};

export default TaskForm;