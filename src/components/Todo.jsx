import React from "react";

export default function Todo({ todo, handleDeleteTodo, handleChageStateTodo }) {
  return (
    <li
      style={{ background: "#ddeef4", padding: "1rem", marginBottom: "1rem" }}
    >
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>&nbsp;
      <button onClick={() => handleChageStateTodo(todo.id)}>
        {todo.isDone ? "취소" : "완료"}
      </button>
    </li>
  );
}
