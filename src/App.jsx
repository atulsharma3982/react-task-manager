import { useState, useRef, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
// import { v1 as uuidv1 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)
  const [editingID, setEditingID] = useState(null)

  const inputRef = useRef(null)

  useEffect(() => {
    let data = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
    setTasks(data);
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])



  const handleSave = () => {
    // const ctask = inputRef.current.value.trim()
    const ctask = task.trim()
    if  (ctask) {
      if (editingID !== null) {
        setTasks(tasks.map((task) => {
          if (task.id === editingID) {
            return {
              ...task, data: ctask
            }
          }
          return task
        }))
        setEditingID(null)
      }
      else {
        const id = crypto.randomUUID();
        setTasks([...tasks, {
          id: id,
          data: ctask,
          isComplete: false
        }])
        setShowCompleted(false)
      }
      // inputRef.current.value = ""
      setTask("")
    }
  }

  const handleStatus = (e, id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        const update = {
          ...task, isComplete: !task.isComplete
        }
        return update
      }
      return task
    }))
  }

  const handleEdit = (e, id) => {
    // const id = e.target.parentElement.parentElement.id
    // inputRef.current.value = tasks.find(t => t.id === id).data
    setTask(tasks.find(t => t.id === id).data)
    inputRef.current.focus()
    setEditingID(id);
    // setTasks(tasks.filter(t => {
    //   return !(t.id === id)
    // }))
  }

  const handleDelete = (e, id) => {
    setTasks(tasks.filter(t => {
      return !(t.id === id)
    }))
  }

  return (
    <main onKeyDown={(e) => {
      if (e.code === "Enter") document.querySelector("#save").click()
    }}>
      <Navbar />
      <div className="container h-[calc(100vh-3rem)] md:w-2xl bg-emerald-400 m-auto">
        <div className='bg-[#a9e4d9] text-md border-b h-28'>
          <div className='flex justify-center items-center p-4 gap-2'>
            <input value={task} ref={inputRef} onChange={(e)=>{setTask(e.target.value)}} type="text" placeholder='Enter your task' className='w-full  border-2 rounded-sm px-4 py-1' />
            <button id='save' onClick={handleSave} className='border-2 rounded-sm px-4 py-1 cursor-pointer' >Save</button>
          </div>
          <div className='px-8 py-2 flex items-center gap-2'>
            <input onChange={(e) => setShowCompleted(e.target.checked)} className='cursor-pointer size-4' type="checkbox" name="showCompleted" id="showCompleted" checked={showCompleted} />
            <label className='font-semibold' htmlFor="showCompleted">Show Completed Tasks</label>
          </div>
        </div>
        <div className="tasks py-4 h-[calc(100vh-10rem)] md:w-2xl flex flex-col items-center gap-5 overflow-y-scroll scroll-smooth scrollbar-thumb-emerald-800 hover:scrollbar-thumb-emerald-900 scrollbar-none md:scrollbar-thin scrollbar-gutter-both">
          {
            (showCompleted ? tasks.filter(t => t.isComplete) : tasks.filter(t => !t.isComplete)).map((t) => {
              const status = t.isComplete
              return <div key={t.id} id={t.id} className='task flex gap-2 items-center px-4 bg-emerald-800 md:w-fit w-[stretch] rounded-lg py-4'>
                <input onChange={(e) => { handleStatus(e, t.id) }} className='cursor-pointer' type="checkbox" name="status" checked={status} />
                <p className={status ? 'md:w-xs w-2xs line-through' : 'md:w-xs w-2xs'}>{t.data}</p>
                <div className="buttons flex gap-3">
                  <button onClick={(e) => { handleEdit(e, t.id) }} className='flex gap-1 items-center cursor-pointer bg-emerald-600 px-3 py-2 rounded-lg h-8 '><FaEdit /><span className='font-semibold md:block hidden'>Edit</span></button>
                  <button onClick={(e) => { handleDelete(e, t.id) }} className='flex gap-1 items-center cursor-pointer bg-emerald-600 px-3 py-2 rounded-lg h-8 '><MdDeleteForever /><span className='font-semibold md:block hidden'>Delete</span></button>
                </div>
              </div>
            }
            )
          }
        </div>
      </div>
    </main>
  )
}

export default App
