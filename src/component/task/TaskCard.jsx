import React from 'react';

const TaskCard = ({card,removeTask,setResolve,resolve}) => {
    // console.log("task in taskcard",card.title)
    const handleRemove = () => {
        removeTask(card)
        handleResolve(card)
    }
    const handleResolve = (data) => {
        setResolve([...resolve,data])
    }
    return (
        <div>
            <div className='p-2 bg-white my-2 rounded-lg shadow-sm'>
                <h1 className='font-medium text-md'>{card.title}</h1>
                <button onClick={handleRemove} className='btn bg-[#02A53B] text-white w-full font-medium mt-3'>Complete</button>
            </div>
        </div>
    );
};

export default TaskCard;