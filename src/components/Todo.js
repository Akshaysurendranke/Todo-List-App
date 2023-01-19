import React from 'react'

function Todo({todos,setTodos,setEditTodos}) {

  const HandsonDelete = ({id}) =>{
    setTodos(todos.filter((todo)=>todo.id !==id))
  }
  const HandsOnEdit = ({id}) =>{
    const findEdit = todos.find((todos)=>todos.id ===id);
    setEditTodos(findEdit);
  }
  return (
    <div>
      {
        todos.map((todo)=>(
          <p className='todo_add'>   {todo.title} <button className='btn_del' onClick={()=>HandsOnEdit(todo)}>Edit</button> <button className='btn_del' onClick={()=>HandsonDelete(todo)}>Del </button> </p>
          
        ))
      }
    </div>
  )
}

export default Todo