import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Header from "./components/Header";

function App() {
  const person = {
    name: "KB",
    title: "Hi! There",
    Message: "Nice to meet",
    setNumber: [1, 5, 6, 8],
  };

  const [Name, setName] = useState({ FirstName: "", LastName: "" });

  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
