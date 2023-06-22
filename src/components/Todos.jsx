import React from "react";
import Todo from "./Todo";

export default function Todos({
  todos,
  handleDeleteTodo,
  handleChageStateTodo,
  todoBoolean,
}) {
  return (
    <article>
      <h2>{todoBoolean ? "완료" : "할 일"}</h2>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {todos
          .filter((todo) => todo.isDone === todoBoolean)
          .map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleDeleteTodo={handleDeleteTodo}
                handleChageStateTodo={handleChageStateTodo}
              />
            );
          })}
      </ul>
    </article>
  );
}
