import "./InputTodo.css";
import axios from "axios";
import { useState,FC } from "react";

function InputTodo() {
  const [todo, setTodo] = useState({
    title: "",
    descriptions: "",
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:5000/todos", todo)
      .then((res) => console.log(res.data));
    setTodo({
      title: "",
      descriptions: "",
    });
  };


  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={todo.title}
        onChange={(e) => {
          setTodo({
            ...todo,
            title: e.target.value,
          });
        }}
      />
      {/* <textarea
        name="desc"
        id="desc"
        placeholder="Enter description"
        value={todo.descriptions}
        onChange={(e) => {
          setTodo({
            ...todo,
            descriptions: e.target.value,
          });
        }}
      ></textarea> */}
      <button>Add Todo</button>
    </form>
  );
}

export default InputTodo;
