import React, { use } from "react";
import Customer from "./Customer";


const Customers = ({setTask,task,setToggle,customerData }) => {
  // console.log(customerData)
  console.log("the new customer ",customerData)
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-5 py-3 px-3">
      {
        customerData.map(customer => <Customer customer={customer} setTask={setTask} task={task} setToggle={setToggle}></Customer>)
      }

    </div>
  );
};

export default Customers;
