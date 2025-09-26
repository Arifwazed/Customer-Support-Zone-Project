import React from 'react';

const ResolveCard = ({card}) => {
    return (
        <div>
            <div className='p-2 bg-white my-2 rounded-lg shadow-sm'>
                <h1 className='font-medium text-md'>{card.title}</h1>
                <button className=' text-[#02A53B] w-full font-medium mt-3'>✅ Completed</button>
            </div>
        </div>
    );
};

export default ResolveCard;