import React from 'react'
import './TodoForm.css'
import { useState } from 'react'

export const TodoForm = ({addTask}) => {
    const [userInput,setuserInput]=useState("")
    const handleChange=(e)=>{
        setuserInput(e.currentTarget.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTask(userInput)
        setuserInput("")

    }
    return (
        <div>
            <form>
                <input type="text" value={userInput} onChange={handleChange} placeholder="Enter You Task Here"/>
                <button className="btn" onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}
