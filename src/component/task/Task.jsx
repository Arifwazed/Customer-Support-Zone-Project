import React from 'react';
import TaskCard from './TaskCard';

const Task = ({task,removeTask,setResolve,resolve,toggle,setToggle,setToggleResolve,removeCustomer}) => {
    if(task.length === 0 ){
    setToggle(false)
    }
    // console.log("task in taskfiled",task)
    return (
        <div>
            <h1 className='font-semibold text-xl '>Task Status</h1>
            {
                toggle ? 
                task.map(card => <TaskCard card={card} removeTask={removeTask} setResolve={setResolve} resolve={resolve} setToggleResolve={setToggleResolve} removeCustomer={removeCustomer}></TaskCard>) : <h1>Select a ticket to add to Task Status</h1>
            }
        </div>
    );
};

export default Task;