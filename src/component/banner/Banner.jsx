import React from 'react';

const Banner = ({task,resolve}) => {
    return (
        <div className='flex flex-col md:flex-row justify-center md:px-20 gap-5 md:gap-10 mt-20'>
            <div className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white text-center flex rounded-xl' >
                <img className=' w-32 md:w-full bg-cover' src={'/vector1.png'} alt="" />
                <div className='py-15 w-[400px]'>
                    <h1 className='text-2xl md:text-3xl'>In-Progress</h1>
                    <h1 className='text-5xl md:text-6xl mt-4 font-semibold'>{task.length}</h1>
                </div>
                <img className='scale-x-[-1] w-32 md:w-full bg-cover' src={'/vector1.png'} alt="" />
            </div>

            <div className='bg-linear-to-r from-[#54CF68] to-[#00827A] text-white text-center flex rounded-xl' >
                <img className=' w-32 md:w-full bg-contain' src={'/vector1.png'} alt="" />
                <div className=' py-15 w-[400px]'>
                    <h1 className='text-2xl md:text-3xl'>Resolved</h1>
                    <h1 className='text-5xl md:text-6xl mt-4 font-semibold'>{resolve.length}</h1>
                </div>
                <img className='scale-x-[-1] w-32 md:w-full bg-contain' src={'/vector1.png'} alt="" />
            </div>
        </div>
    );
};

export default Banner;