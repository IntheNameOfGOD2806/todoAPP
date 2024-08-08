import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import Example from '../components/Modal';
import "./App.css";

function App() {
  const [title, setTitle] = useState<string>("");
  const [todos, setTodos] = useState<todo[]>([
    {
      id: uuidv4(),
      title: "adfafaasda",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "asdasdadadada",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "12313123123131",
      completed: false,
    },
  ]);
  const [editID, setEditID] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAddTodo = () => {
    if (title === "") {
      alert("Title cannot be empty");
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  };
  const setCompleted = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEditTodo = (title: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === editID ? { ...todo, title: title } : todo
      )
    );
  };
  return (
    <>
      <div className="App-wrapper">
        <div>
          <div id="myDIV" className="header">
            <h2 style={{ margin: "5px" }}> To Do List</h2>
            <div>
              <InputGroup size="lg">
                <Form.Control
                  value={title}
                  onChange={(e: any) => setTitle(e.target.value as string)}
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
            </div>
            <span
              className="addBtn"
              onClick={handleAddTodo}
              style={{
                cursor: "pointer",
                position: "relative",
                top: "4px",
                left: "120px",
              }}
            >
              Add
            </span>
            <br />
            <br />
            <h4> *click on todo title to complete</h4>
            <h6>Author:DatTT</h6>
          </div>

          <ul id="myUL">
            {todos.length === 0 && <li>No todos</li>}
            {todos.length > 0 &&
              todos.map((todo) => (
                <li key={todo.id} className={todo.completed ? "checked" : ""}>
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                    onClick={() => setCompleted(todo.id as string)}
                  >
                    {todo.title}
                  </span>
                  <span
                  style={{
                    float: "right",
                    marginLeft: "10px",
                  }}
                      onClick={() => {
                        setOpenModal(true);
                        setEditID(todo.id as string);
                      }}
                    >
                      <FaPenToSquare />
                    </span>
                  <span
                    onClick={() => handleDeleteTodo(todo.id as string)}
                    className="delete"
                    style={{
                      float: "right",
                      zIndex: "10",
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                  
                    <FaRegTrashAlt />
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>

    <Example openModal={openModal} setOpenModal={setOpenModal}  editID={editID} handleEditTodo={handleEditTodo} />
    </>
  );
}

export default App;
