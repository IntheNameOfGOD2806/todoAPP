import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import "../components/todolist.scss";
import "./App.css";import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
  const[title, setTitle] = useState<string>("")
  const[todos, setTodos] = useState<todo[]>([
    {
      id: uuidv4(),
      title: "Hit the gym",
      completed: true
    },
    {
      id: uuidv4(),

      title: "Meet George",
      completed: false
    },
    {
      id: uuidv4(),
      title: "Buy eggs",
      completed: false
    }
  ])
  const handleAddTodo = () => {
   
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
    setTitle("")
 
  }
  const setCompleted = (id: string) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <>
      <div id="myDIV" className="header">
        <h2 style={{ margin: "5px" }}>My To Do List</h2>
        <div>
        <InputGroup  size="lg">
       
        <Form.Control
         value={title}
         onChange={(e) => setTitle(e.target.value as string)}
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
        </div>
        <span  className="addBtn" onClick={handleAddTodo}>Add</span>
      </div>

      <ul id="myUL">
        {todos.length === 0 && <li>No todos</li>}
        {todos.length > 0 && todos.map((todo) => (
          
        <li key={todo.id} className={todo.completed ? "checked" : ""}  >
          <span onClick={() => setCompleted(todo.id as string)}>

          {todo.title}
          </span>
          <span onClick={() => handleDeleteTodo(todo.id as string)}  className="delete" style={{ float: "right" }}>
            <FaRegTrashAlt />
          </span>
        </li>
        ))}
        
      </ul>
    </>
  );
}

export default App;
