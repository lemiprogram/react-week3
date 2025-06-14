import {  createContext, useEffect, useRef, useState } from 'react'
import './index.css'
import './App.css'
import { CgAdd } from "react-icons/cg";
import Todo from './Components/Todo/Todo';
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext()
function App() {
  const [todos, setTodos] = useState([])
  const [progress, setProgress] = useState(0)
  const todoList = useRef(null)
  useEffect(()=>renderTodos(),[todos])
  function renderTodos(){
    setProgress(()=>(todos.filter(item=>item.isChecked).length/todos.length)*100 +"%")
  }
  const addTodoFunc = (content)=>{
    setTodos(t=>[...t,{id:uuidv4(),content,isChecked:false}])
  }
  const addApiTodos = async()=>{
    const content = await fetch("https://dummyjson.com/todos/random")
                .then(res=>{
                    if(!res.ok){
                      console.log("This is the issue:")
                    }
                    return res.json()
                    // myClass para is the class given to the 
                })
                .then(data=>data.todo)
                .catch(err=>console.error(err))
    
    addTodoFunc(content)
                            
  }
  
  return (
    <>
      <div className="grid place-content-center w-[100vw] h-[100vh] bg-">
        <div className="card w-[500px]">
          <div className="heading">Todos</div>
          <div className="flex justify-between">
            <div className="todos w-[90%] my-3 h-[400px] overflow-y-scroll flex flex-col gap-1" ref={todoList}>{todos.map(task=><TodoContext.Provider value={{task,todos,setTodos,setProgress}}>
              <Todo/>
            </TodoContext.Provider >)}</div>
            <div className="progress  h-[50%] w-4 rounded-full p-[2.5px] ">
              <div className="progressBar  w-4 rounded-full " style={todos.length?{height:progress}:{height:0}}></div>
            </div>
          </div>
          <div className="btn-section justify-around">
            <button className="btn add-todo" onClick={()=>addTodoFunc("New Todo")}><CgAdd/></button>
            <button 
              className='btn'
              onClick={()=>addApiTodos()}
            >Random </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
