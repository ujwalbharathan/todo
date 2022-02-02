
import './App.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import data from './components/Data.json'
import { useState } from 'react';
import { TodoForm } from './components/TodoForm';

function App() {
  const [todoList,setTodoList]=useState([])
 
  const handleToggle=(id)=>{
    const update_todo=todoList.map((todo)=>{
      return todo.id==id?{...todo,complete:!todo.complete}:{...todo}
    })
    setTodoList(update_todo)
  }
  const handleFilter=()=>{
  const filterd= todoList.filter(task=>{
    if(!task.complete){
      return task
    }
  })
  setTodoList(filterd)
  }

  const addTask=(userInput)=>{
    let copy=[...todoList]
    copy=[{id:todoList.length+1,task:userInput,complete:false},...copy]
    setTodoList(copy)
  }

  return (
    <div>
      <Header/>
      <TodoForm addTask={addTask}/>
      <TodoList todolists={todoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
    </div>
  );
}

export default App;
