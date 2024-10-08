import { useState } from 'react'
import viteLogo from '/vite.svg'
// import './App.css'
import "./todo.scss"
import TodoNew from './TodoNew'
import TodoData from './TodoData'
import reactLogo from "../../assets/react.svg"
const TodoApp = () => {
    const data = {
        address: "Ha Noi",
        country: "Viet Nam"
    }
    const addNewtodo = () => {
        alert("me")
    }
    return (
        <div className='todo-container'>
            <div className='todo-title'>Todo-List</div>
            <TodoNew
                addNewtodo={addNewtodo}
            />
            <TodoData

                data={data}
            />
            {/* <div className='toto-image'>
                <img src={reactLogo} className='logo' />
            </div> */}
        </div>
    )

}
export default TodoApp;