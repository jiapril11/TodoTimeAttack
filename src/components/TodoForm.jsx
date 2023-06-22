import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm({ todos, setTodos }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");
  const todoTitleRef = useRef(null);

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), title: todoTitle, content: todoContent, isDone: false },
    ]);
    setTodoTitle("");
    setTodoContent("");
    todoTitleRef.current.focus();
  };

  return (
    <form onSubmit={handleTodoSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          padding: "1rem",
          background: "lightblue",
        }}
      >
        <div>
          <label htmlFor="inputTitle">제목</label>{" "}
          <input
            id="inputTitle"
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            ref={todoTitleRef}
          />
        </div>
        <div>
          <label htmlFor="inputContent">내용</label>{" "}
          <input
            id="inputContent"
            type="text"
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value)}
          />
        </div>
        <button type="submit">등록</button>
      </div>
    </form>
  );
}
