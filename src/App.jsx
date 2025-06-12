import { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import Button from './Components/Button/Button'
import { HiSaveAs } from "react-icons/hi";
import { MdOutlineCancel,MdDelete } from "react-icons/md";
import { CgAdd } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";


function App() {
  const [todos, setTodos] = useState([{task:"do the train coz it just makes sense coz again why not",dueDate:"2022-11-11",}])
  const [todoList,setTodosList] = useState([])
  

  useEffect(()=>renderTodos(),[todos])
  const renderTodos = ()=>{ 
    
    setTodosList((tL)=>[...todos.map((item,index)=>{
      const {task,dueDate} = item;
      return (<li 
        key={index}
        className='flex items-center justify-between'   
        
      >
        <div className="value w-[70%] gap-5 flex justify-around items-center">
          
          <label className='flex gap-5 cursor-pointer'>
            <input 
              type="checkbox"
              className='cursor-pointer'
              
            />
            <div className="task  inline overflow-x-scroll">{task}</div>
          </label>
          <div className="dueDate">{dueDate}</div>
        </div>

        <div className="btns w-[30%] flex gap-3 justify-end">
          <Button
            paras={{buttonText:<FaEdit/>,toolTipText:"edit",func:(e)=>editFunc(e.target)}}
          />
          <Button
            paras={{buttonText:<MdDelete/>,toolTipText:"delete",func:(e)=>deleteFunc(e.target)}}
          />
        </div>
        <div className="modal-body z-2 hidden top-0 left-0 bg-red-200 fixed w-[100vw] h-[100vh] grid place-content-center">
          <div className="modal card bg-black gap-5">
            <div className="inp">
              <label htmlFor="">Task</label>
              <input type="text" />
            </div>
            <div className="inp">
              <label htmlFor="">Due Date</label>
              <input type="date" />
            </div>
            <div className="flex justify-around">
              <Button
                paras={{buttonText:<MdOutlineCancel/>,toolTipText:"cancel",func:(e)=>cancelFunc(e.target)}}
              />
              <Button
                paras={{buttonText:<HiSaveAs/>,toolTipText:"save",func:(e)=>saveFunc(e.target)}}
              />
            </div>
          </div>
        </div>

      </li>)
    })])
  }
  const addTodoFunc = ()=>{
    set
  }
  const editFunc = (e)=>{
    console.log(e)
  }
  const deleteFunc = (e)=>{
    console.log(e)
  }
  return (
    <>
  
      <div className="app min-h-[100vh] grid place-content-center">
        <div className="card w-[550px]">
          <div className="heading">TODOs</div>
          <div className="todos flex flex-col overflow-y-scroll  h-[200px]">
            {todoList}
          </div>
          <div className="btn-section justify-center">
            <Button 
              paras={{buttonText:<CgAdd/>,toolTipText:"Add",func:addTodoFunc}}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
