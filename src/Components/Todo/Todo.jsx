import React, { useState, useRef } from 'react'
import { HiSaveAs } from "react-icons/hi";
import { MdOutlineCancel,MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
function Todo({paras}) {
  const taskInput = useRef(null)
  const errorMsg = useRef(null)
  const [isEditing, setIsEditing] = useState(false)
  const {task,setTodos} = paras
  task.isEditing = isEditing
  const deleteFunc = id=> setTodos(t=>t.filter(task=>task.id !== id))
  const checkFunc = e=> task.isChecked = e.target.checked
  const editFunc = ()=>setIsEditing(()=>true)
  const closeFunc = ()=>setIsEditing(()=>false)
  const saveFunc = id=>{
    if(!taskInput.current.value){
      errorMsg.current.classList.toggle("hidden")
      setTimeout(()=>errorMsg.current.classList.toggle("hidden"),1000)
    }
  }
  return(
    <>
      <li 
        className='flex  items-center justify-between bg-[var(--bg-100)] px-4 py-2 rounded-lg'
        key={task.id}
      >
          {task.isEditing?<div className="modal-body" onClick={e=>e.target.classList.contains("modal-body")?closeFunc():""}>
            <div className="modal card relative ">
              <div className="absolute top-2 right-2 cursor-pointer" onClick={()=>closeFunc()}><RxCross1/></div>
              <div className="inp">
                <label htmlFor="">Task</label>
                <input type="text" ref={taskInput} />
              </div>
                <div 
                  className="hiddden text-red-500 errorMsg capitalize text-center"
                  ref={errorMsg}
                >please input a Task</div>
              <div className="btn-section justify-center pt-5">
                <button 
                  className="btn cancel-btn"
                  onClick={()=>saveFunc()}
                ><HiSaveAs/></button>
              </div>
            </div>
          </div>:""}
          <div className="task-checkbox-section ">
            <label className='flex items-center gap-2 cursor-pointer'>
              <input 
                type="checkbox" 
                className="checkbox cursor-pointer " 
                onChange={e=>checkFunc(e)}
                defaultChecked={task.isChecked}
              />
              <div className="task">{task.content }</div>
            </label>
            
          </div>
          <div className="btn-section gap-4">
            <button 
              className="btn edit-btn"
              onClick={()=>editFunc()}
            ><FaEdit/></button>
            <button 
              className="btn delete-btn "
              onClick={()=>deleteFunc(task.id)}
            ><MdDelete/></button>
          </div>
      </li>
    </>
  )

}

export default Todo