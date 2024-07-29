import React from "react";
import style from "./todoitem.module.css";

const TodoItem = ({ item, Todos, setTodos }) => {
  function handleDelete() {
    console.log("delete action method");
    const resultTodo = Todos.filter((items) => items !== item);
    setTodos(resultTodo);
  }

  function handleStatus(name) {
    console.log("handle status of todo");
    const newArray = Todos.map((items) =>
      items.name === name ? { ...items, status: !items.status } : items
    );
    setTodos(newArray);
    console.log(Todos);
  }

  return (
    <div className={style.item}>
      <div className={style.itemName}>
        <span
          className={item.status ? style.completed : ""}
          onClick={() => handleStatus(item.name)}
        >
          {item.name}
        </span>

        <span>
          <button onClick={handleDelete} className={style.deleteButton}>
            X
          </button>
        </span>
      </div>

      <hr className={style.hrline} />
    </div>
  );
};

export default TodoItem;
