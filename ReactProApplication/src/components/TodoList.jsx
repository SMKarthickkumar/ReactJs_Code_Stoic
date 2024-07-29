import React from "react";
import TodoItem from "./TodoItem";
import style from "./todolist.module.css";

const TodoList = ({ Todos, setTodos }) => {
  return (
    <div className={style.list}>
      {Todos.map((items) => (
        <TodoItem
          key={items.name}
          item={items}
          Todos={Todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
