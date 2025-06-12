import { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import Button from './Components/Button/Button'
import { CgAdd } from "react-icons/cg";
import Todo from './Components/Todo/Todo';


function App() {
  const [todos, setTodos] = useState([])
  const [todoList,setTodosList] = useState([])
  
  

  useEffect(()=>renderTodos(),[todos])
  const renderTodos = ()=>{ 
    
    setTodosList((tL)=>[...todos.map((item,index)=>{
      return (
        <Todo
          paras={{item,index}}
        />
    )
    })])
  }
  const addTodoFunc = ()=>{
    setTodos(t=>[...t,{task:"new Todo", dueDate:""}])
  }
  
  return (
    <>
  
      <div className="app min-h-[100vh] grid place-content-center">
        <div className="card w-[550px]">
          <div className="heading">TODOs</div>
          <div className="todos flex flex-col overflow-y-scroll  h-[200px] gap-3">
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
