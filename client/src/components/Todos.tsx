import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";
import "./Todos.css";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  console.log("todos", todos);

  return (
    <div className="todos">
      <h1>Todos</h1>

      {todos.slice(0).reverse().map((todo) => (
              <Todo
                  todo={todo}
              />
            ))}
    </div>
  );
}

export default Todos;
