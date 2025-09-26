import React from 'react';
import ResolveCard from './ResolveCard';

const Resolve = ({resolve}) => {
    return (
        <div className='my-4'>
            <h1 className='font-semibold text-xl'>Resolved Task</h1>
            {
                resolve.map(card => <ResolveCard card={card}></ResolveCard>)
            }
        </div>
    );
};

export default Resolve;