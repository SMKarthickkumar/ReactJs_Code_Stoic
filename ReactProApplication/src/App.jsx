import "./App.css";
import Hello from "./components/Hello";

function App() {
  const person = {
    name: "KB",
    title: "Hi! There",
    Message: "Nice to meet",
    setNumber: [1, 5, 6, 8],
  };

  return (
    <div className="App">
      <Hello person={person} />
    </div>
  );
}

export default App;
