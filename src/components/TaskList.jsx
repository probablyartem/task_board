import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const TaskList = ({tasks, title, remove}) => {

    if (!tasks.length) {
        return (
            <h1 style={{textAlign:'center'}}>
                Posts havent found!
            </h1>


        )

    }
    return (
        <div>
            <h1 style = {{textAlign: 'center'}}>
                {title}</h1>
            <TransitionGroup>
                {tasks.map((task, index) =>
                        <CSSTransition
                            key={task.id}
                            timeout={500}
                            classNames="task"
                        >
                    <PostItem remove={remove} number = {index + 1} task = {task} />
                    </CSSTransition>
                        )}
            </TransitionGroup>

        </div>
    );
};

export default TaskList;