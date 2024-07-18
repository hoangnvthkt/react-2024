import { useState } from 'react'
import viteLogo from '/vite.svg'
// import './App.css'
import "./components/todo/todo.scss"
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from "./assets/react.svg"


const App = () => {
  const data = {
    address: "Ha Noi",
    country: "Viet Nam"
  }
  const addNewtodo = () => {
    alert("me")
  }
  return (
    <>
      <div className='todo-container'>
        <div className='todo-title'>Todo-List</div>
        <TodoNew
          addNewtodo={addNewtodo}
        />
        <TodoData

          data={data}
        />
        <div className='toto-image'>
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
