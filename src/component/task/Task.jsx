import React from 'react';
import TaskCard from './TaskCard';

const Task = ({task,removeTask,setResolve,resolve}) => {
    // console.log("task in taskfiled",task)
    return (
        <div>
            <h1 className='font-semibold text-xl '>Task Status</h1>
            {/* <div className='border p-2 bg-white my-2'>
                <h1 className='font-medium text-md'>Payment Failed - Card Declined</h1>
                <button className='btn bg-[#02A53B] text-white w-full font-medium mt-3'>Complete</button>
            </div> */}
            
            {
                task.map(card => <TaskCard card={card} removeTask={removeTask} setResolve={setResolve} resolve={resolve}></TaskCard>)
            }
        </div>
    );
};

export default Task;