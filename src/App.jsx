import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Banner from './component/banner/Banner'
import Customers from './component/customer/Customers'
import Task from './component/task/Task'
import Resolve from './component/resolve_task/Resolve'

const fetchCustomers = async () => {
  const res = await fetch('./customers.json');
  return res.json();
}

const customerPromise = fetchCustomers();
function App() {
  const [task,setTask] = useState([]);
  // console.log(task)
  const [resolve,setResolve] = useState([]);
  console.log('Resolve values: ' ,resolve)
  const removeTask = (data) => {
    console.log('Remove action')
    const filterTask = task.filter(c => c.id !== data.id);
    setTask(filterTask);
  }

  return (
    <>
      
      <div className='bg-[#f5f5f5]'>
      <Navbar></Navbar>
      <Banner task={task} resolve={resolve}></Banner>

      <div className='md:px-20 mt-10 flex flex-col md:flex-row gap-5'>
        <div>
        <h1 className='font-semibold text-xl '>Customer Tickets</h1>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Customers customerPromise={customerPromise} setTask={setTask} task={task}></Customers>
        </Suspense>
        </div>
        <div className='md:w-[600px] bg-blue-200 p-2'>
          {/* <div><h1 className='font-semibold text-xl '>Task Status</h1></div> */}
          <Task task={task} removeTask={removeTask} resolve={resolve} setResolve={setResolve}></Task>
          {/* <div><h1 className='font-semibold text-xl '>Resolved Task</h1></div> */}
          <Resolve resolve={resolve}></Resolve>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
