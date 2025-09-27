import { Suspense, use, useState } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Banner from './component/banner/Banner'
import Customers from './component/customer/Customers'
import Task from './component/task/Task'
import Resolve from './component/resolve_task/Resolve'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import Footer from './component/footer/Footer'

const fetchCustomers = async () => {
  const res = await fetch('./customers.json');
  return res.json();
}

const customerPromise = fetchCustomers();

function App() {
  const initialCustomers = use(customerPromise);
  const [customerData,setCustomerData] = useState(initialCustomers)

  const [task,setTask] = useState([]);
  // console.log(task)
  const [resolve,setResolve] = useState([]);
  // console.log('Resolve values: ' ,resolve)
  const [toggle,setToggle] = useState(false);
  const [toggleResolve,setToggleResolve] = useState(false)
  const removeTask = (data) => {
    console.log('Remove action')
    const filterTask = task.filter(c => c.id !== data.id);
    setTask(filterTask);
  }
  // console.log("length of task: ",task.length)

  const removeCustomer = (data) => {
    const filterCustomerData = customerData.filter(customer => customer.id !== data.id);
    setCustomerData(filterCustomerData);
    // console.log("the new customer ",customerData)
  }
  

  return (
    <>
      
      <div className='bg-[#f5f5f5]'>
      <Navbar></Navbar>
      <Banner task={task} resolve={resolve}></Banner>

      <div className='md:px-20 mt-10 flex flex-col md:flex-row gap-5 mb-20'>
        <div>
        <h1 className='font-semibold text-xl p-2'>Customer Tickets</h1>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Customers setTask={setTask} task={task} setToggle={setToggle} customerData={customerData}></Customers>
        </Suspense>
        </div>
        <div className='md:w-[900px] p-3'>
          {/* <div><h1 className='font-semibold text-xl '>Task Status</h1></div> */}
          <Task task={task} removeTask={removeTask} resolve={resolve} setResolve={setResolve} toggle={toggle} setToggle={setToggle} setToggleResolve={setToggleResolve} removeCustomer={removeCustomer}></Task>
          {/* <div><h1 className='font-semibold text-xl '>Resolved Task</h1></div> */}
          <Resolve resolve={resolve} toggleResolve={toggleResolve}></Resolve>
        </div>
      </div>
      <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
