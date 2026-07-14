import React, { useRef, useState } from 'react'

const Task = ({ id, data, tasks, checkedStatus }) => {
    const statusRef = useRef(null)
    const [status, setStatus] = useState(checkedStatus)
    // if (statusRef.current) {
    //     if (checkedStatus) {
    //         statusRef.current.querySelector("p").classList.add('line-through');
    //     }
    //     else {
    //         statusRef.current.querySelector("p").classList.remove('line-through')
    //     }
    // }

    let currentTask = tasks.find(task => task.id === id)
    currentTask.isComplete = status;
    // checkedStatus=status
    // const changeStatus = (e) => {
    //     const status = statusRef.current;
    //     console.log(e.target.checked)
    //     if (e.target.checked || checkedStatus) {
    //         // checkedStatus = true;
    //         status.querySelector("p").classList.add('line-through')
    //         status.querySelector("input").checked = true;
    //         currentTask.isComplete = true
    //     }
    //     else {
    //         status.querySelector("p").classList.remove('line-through')
    //         currentTask.isComplete = false
    //     }
    // }

    const editTask = () => {
        
    }

    const deleteTask = () => {
        tasks.splice(tasks.findIndex(() => currentTask.id), 1);
        // statusRef.current.remove();
    }

    return (
        <div ref={statusRef} id={id} className='flex gap-2 items-center px-4 bg-emerald-800 w-fit rounded-lg py-4'>
            <input onChange={() => {
                setStatus(statusRef.current.querySelector("input").checked)
            }} className='cursor-pointer' type="checkbox" name="status" checked={status} />
            {status ? <p className='md:w-sm w-2xs line-through'>{data}</p> : <p className='md:w-sm w-2xs'>{data}</p>}
            <div className="buttons flex gap-3">
                <button onClick={editTask} className='cursor-pointer bg-emerald-600 px-3 py-2 rounded-lg h-10 md:block hidden'>Edit</button>
                <button onClick={deleteTask} className='cursor-pointer bg-emerald-600 px-3 py-2 rounded-lg h-10 md:block hidden'>Delete</button>
            </div>
        </div>
    )
}

export default Task
