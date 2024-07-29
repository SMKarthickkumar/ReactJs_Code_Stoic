import React, { useState } from "react";
import style from "./form.module.css";

const Form = ({ Todos, setTodos }) => {
  //const [Todo, setTodo] = useState("");
  const [Todo, setTodo] = useState({ name: "", status: false });

  function onhandleSubmit(e) {
    e.preventDefault();
    setTodos([...Todos, Todo]);
    setTodo({ name: "", status: false });
  }

  return (
    <form className={style.TodoForm} onSubmit={onhandleSubmit}>
      <div className={style.inputContainer}>
        <input
          className={style.Input}
          type="text"
          placeholder="Enter the Task"
          value={Todo.name}
          onChange={(e) => setTodo({ name: e.target.value, status: false })}
        ></input>
        <button type="submit" className={style.Button}>
          ADD
        </button>
      </div>
    </form>
  );
};

export default Form;
