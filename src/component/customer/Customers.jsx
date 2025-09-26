import React, { use } from "react";
import Customer from "./Customer";


const Customers = ({ customerPromise,setTask,task,setToggle }) => {
  const customerData = use(customerPromise);
  // console.log(customerData)
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-5 py-3 px-2">
      {/* <div className=" p-3 text-[#627382] bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-black text-lg">Login Issues - Can't Access Account</h1>
          <button className=" rounded-3xl px-3 py-0.5 bg-[#B9F8CF] font-semibold flex justify-center items-center gap-x-2">
            <div className="w-3 h-3 rounded-full bg-[#02A53B]"></div>
            <p>Open</p>
          </button>
        </div>
        <p className="my-2">Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
        <div className="flex justify-between text-sm font-semibold">
            <div className="flex  gap-x-3 ">
                <h2 className="">#1001</h2>
                <h2 className="text-[#F83044] ">HIGH PRIORITY</h2>
            </div>
            <div className="flex gap-x-4">
                <p className="">John Smith</p>
                <div className="flex gap-x-2">
                    <img src={calenderImg} alt="" />
                    <p className=""> 1/15/2024</p>
                </div>
            </div>
        </div>
      </div> */}
        {/* <div className=" p-3 text-[#627382] bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-black text-lg">Login Issues - Can't Access Account</h1>
          <button className=" rounded-3xl px-3 py-0.5 bg-[#B9F8CF] font-semibold flex justify-center items-center gap-x-2">
            <div className="w-3 h-3 rounded-full bg-[#02A53B]"></div>
            <p>Open</p>
          </button>
        </div>
        <p className="my-2">Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
        <div className="flex justify-between text-sm font-semibold">
            <div className="flex  gap-x-3 ">
                <h2 className="">#1001</h2>
                <h2 className="text-[#F83044] ">HIGH PRIORITY</h2>
            </div>
            <div className="flex gap-x-4">
                <p className="">John Smith</p>
                <div className="flex gap-x-2">
                    <img src={calenderImg} alt="" />
                    <p className=""> 1/15/2024</p>
                </div>
            </div>
        </div>
      </div> */}
      {
        customerData.map(customer => <Customer customer={customer} setTask={setTask} task={task} setToggle={setToggle}></Customer>)
      }

    </div>
  );
};

export default Customers;
