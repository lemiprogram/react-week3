import { useEffect, useRef, useState } from 'react'
import './index.css'
import './App.css'
import { CgAdd } from "react-icons/cg";
import Todo from './Components/Todo/Todo';


function App() {
  const [todos, setTodos] = useState([])
  const todoList = useRef(null)
  useEffect(()=>renderTodos(),[todos])
  function renderTodos(){
    
  }
  const addTodoFunc = ()=>{
    setTodos(t=>[...t,{id:t.length+1,content:"new Todo",isEditing:false,isChecked:false}])
  }
  const editFunc=()=>{

  }
  const saveFunc=()=>{
    
  }
  const cancelFunc=()=>{

  }
  
  return (
    <>
      <div className="grid place-content-center w-[100vw] h-[100vh] bg-">
        <div className="card w-[500px]">
          <div className="heading">Todos</div>
          <div className="todos my-3 h-[400px] overflow-y-scroll flex flex-col gap-1" ref={todoList}>{todos.map(task=><Todo paras={{task,setTodos}}/>)}</div>
          <div className="btn-section justify-center">
            <button className="btn " onClick={()=>addTodoFunc()}><CgAdd/></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
