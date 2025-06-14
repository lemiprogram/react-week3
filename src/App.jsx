import { useEffect, useRef, useState } from 'react'
import './index.css'
import './App.css'
import { CgAdd } from "react-icons/cg";
import Todo from './Components/Todo/Todo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])
  const [progress, setProgress] = useState(0)
  const todoList = useRef(null)
  useEffect(()=>renderTodos(),[todos])
  function renderTodos(){
    setProgress(()=>(todos.filter(item=>item.isChecked).length/todos.length)*100 +"%")
  }
  const addTodoFunc = ()=>{
    setTodos(t=>[...t,{id:uuidv4(),content:"new Todo",isChecked:false}])
  }
  
  return (
    <>
      <div className="grid place-content-center w-[100vw] h-[100vh] bg-">
        <div className="card w-[500px]">
          <div className="heading">Todos</div>
          <div className="flex justify-between">
            <div className="todos w-[90%] my-3 h-[400px] overflow-y-scroll flex flex-col gap-1" ref={todoList}>{todos.map(task=><Todo paras={{task,todos,setTodos,setProgress}}/>)}</div>
            {todos.length? <div className="progress h-full w-4 rounded-full p-[2.5px] ">
              <div className="progressBar  w-4 rounded-full " style={{height:progress}}></div>
            </div>:"" }
          </div>
          <div className="btn-section justify-center">
            <button className="btn " onClick={()=>addTodoFunc()}><CgAdd/></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
