import React from 'react'
import './Todo.css'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'


export const Todo = ({todo,handleToggle}) => {
    const handleClick=(e)=>{
        e.preventDefault()
        handleToggle(e.currentTarget.id)

    }
    return (
        <div className="todo">
           <p className={todo.complete?"strike":""} id={todo.id} onClick={handleClick} value={todo.id} key={todo.id+todo.task}> {todo.task}</p>
        </div>
    )
}
