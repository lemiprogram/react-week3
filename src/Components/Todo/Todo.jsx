import React, { useState, useRef } from 'react'
import { HiSaveAs } from "react-icons/hi";
import { MdOutlineCancel,MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
function Todo({paras}) {
  const {task,setTodos} = paras
  const deleteFunc = id=> setTodos(t=>t.filter(task=>task.id !== id))
  const checkFunc = e=> task.isChecked = e.target.checked
  return(
    <>
      <li 
        className='flex  items-center justify-between bg-[var(--bg-100)] px-4 py-2 rounded-lg'
        key={task.id}
      >
          <div className="task-checkbox-section ">
            <label className='flex items-center gap-2 cursor-pointer'>
              <input 
                type="checkbox" 
                className="checkbox cursor-pointer " 
                onChange={e=>checkFunc(e)}
                defaultChecked={task.isChecked}
              />
              <div className="task">{task.content}</div>
            </label>
          </div>
          <div className="btn-section gap-4">
            <button 
              className="btn edit-btn"
              onClick={()=>editFunc()}
            ><FaEdit/></button>
            <button 
              className="btn edit-btn "
              onClick={()=>deleteFunc(task.id)}
            ><MdDelete/></button>
          </div>
      </li>
    </>
  )

}

export default Todo