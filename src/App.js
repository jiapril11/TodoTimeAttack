import { useRef, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

function App() {
  const initialState = [
    {
      id: uuidv4(),
      title: "Title1",
      content: "Cotents1",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "Title2",
      content: "Cotents2",
      isDone: false,
    },
  ];
  const [todos, setTodos] = useState(initialState);

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChageStateTodo = (id) => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
    });
  };
  return (
    <>
      <TodoForm todos={todos} setTodos={setTodos} />
      <section style={{ padding: 16 }}>
        <Todos
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleChageStateTodo={handleChageStateTodo}
          todoBoolean={false}
        />
        <hr />

        <Todos
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleChageStateTodo={handleChageStateTodo}
          todoBoolean={true}
        />
      </section>
    </>
  );
}

export default App;
