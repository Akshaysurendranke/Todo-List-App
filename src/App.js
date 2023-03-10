import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import {useState} from 'react';
import Todo from './components/Todo';



const App = ()=> {
  const [input ,setInput] = useState('');
const [todos,setTodos] = useState([]);
const [editTodos,setEditTodos] = useState(null);
  return (
    <div className="App">
      <div className='container'>
  
    
      <Header />
      <Form input={input}
            setInput = {setInput}
            todos= {todos}
            setTodos = {setTodos} 
            editTodos = {editTodos}
            setEditTodos ={setEditTodos}
      
      />
      <Todo todos ={todos} setTodos = {setTodos} setEditTodos ={setEditTodos} />
      
      
      </div>
    </div>
  );
}

export default App;
