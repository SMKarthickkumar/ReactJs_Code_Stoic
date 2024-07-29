import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

const Todo = () => {
  const [Todos, setTodos] = useState([]);
  const completedTodos = Todos.filter((todo) => todo.status).length;
  const TotalTodos = Todos.length;
  return (
    <div>
      <Form Todos={Todos} setTodos={setTodos} />
      <TodoList Todos={Todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} TotalTodos={TotalTodos} />
    </div>
  );
};

export default Todo;
