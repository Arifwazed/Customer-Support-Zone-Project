import React from 'react';
import calenderImg from "../../assets/calendar.png"
import { toast } from 'react-toastify';

const Customer = ({customer,setTask,task,setToggle}) => {
    const handletask = (taskData) => {
        task = task.filter(t => t.id !== taskData.id);
        setTask([...task,taskData]);
        setToggle(true);
        toast('Customer ticket add to task status')
    }
    // console.log(customer)
    return (
        <div>
            <div onClick={() => handletask(customer)} className=" p-3 text-[#627382] bg-white rounded-lg shadow-sm">
                    <div className="flex justify-between items-center">
                      <h1 className="font-semibold text-black text-lg">{customer.title}</h1>
                      <button className=" rounded-3xl px-3 py-0.5 bg-[#B9F8CF] font-semibold flex justify-center items-center gap-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#02A53B]"></div>
                        <p>{customer.status}</p>
                      </button>
                    </div>
                    <p className="my-2 line-clamp-2">{customer.description}</p>
                    <div className="flex justify-between items-center text-sm font-semibold">
                        <div className="flex gap-x-3 ">
                            <h2 className="">#100{customer.id}</h2>
                            <h2 className={`${(customer.priority === 'LOW PRIORITY') ? "text-[#02A53B]" : (customer.priority === 'MEDIUM PRIORITY') ? "text-[#FEBB0C]" :"text-[#F83044]"} `}>{customer.priority}</h2>
                        </div>
                        <div className="flex justify-between gap-x-2">
                            <p className="">{customer.customer}</p>
                            <div className="flex gap-x-0.5 md:gap-x-2 mr-2 md:mr-0">
                                <img className='w-6 h-6' src={calenderImg} alt="" />
                                <p className="">{customer.createdAt}</p>
                            </div>
                        </div>
                    </div>
                  </div>
        </div>
    );
};

export default Customer;