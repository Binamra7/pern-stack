import { FC } from "react";
import "./Todo.css";
import axios from "axios";
interface TodoProps {
  todo: {
    id: number;
    title: string;
    descriptions: string;
  };
}

const handleDelete = (id: number) => {
  console.log("delete", id);
  axios.delete(`http://localhost:5000/todos/${id}`).then((res) => {
    console.log(res.data);
  });
};

const Todo: FC<TodoProps> = ({ todo }) => {
  return (
    <>
      <div className="todo">
        <h1 className="todo-title">{todo.title}</h1>
        <button
          className="btn btn-danger m-3"
          onClick={() => handleDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Todo;
