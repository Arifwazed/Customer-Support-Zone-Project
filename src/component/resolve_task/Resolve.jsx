import React from 'react';
import ResolveCard from './ResolveCard';

const Resolve = ({resolve,toggleResolve}) => {
    return (
        <div className='my-4'>
            <h1 className='font-semibold text-xl'>Resolved Task</h1>
            {
                toggleResolve ?
                resolve.map(card => <ResolveCard card={card}></ResolveCard>) : 
                <h1>No resolved tasks yet.</h1>
            }
        </div>
    );
};

export default Resolve;