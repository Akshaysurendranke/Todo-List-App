import React, {useEffect} from 'react'

const Form =({input,setInput,todos,setTodos,editTodos,setEditTodos}) => {
    const inputChange = (e)=>{
        setInput(e.target.value);
    }
    const updateTodo=(title,id)=>{
      const newTodo = todos.map((todo)=>
        todo.id === id ? {title,id}:todo
      );
      setTodos(newTodo);
      setEditTodos("");

    };
    useEffect(()=>{
      if(editTodos){
        setInput(editTodos.title)

      }else{
        setInput("")
      }
    },[setInput,editTodos]);
    const Onsubmitt = (e)=>{
        e.preventDefault();
       if(!editTodos){
        setTodos([...todos,{id:Date.now(),title:input,status:false}]);
        setInput("");
       }else{
        updateTodo(input,editTodos.id)
       }
    }
  return (
    <form onSubmit={Onsubmitt}>
        <input type="text" className='string' value={input} onChange={inputChange}/>
        <button type="submit" className='btn_add'>Add</button>
        
    </form>
      
    
  )
}

export default Form