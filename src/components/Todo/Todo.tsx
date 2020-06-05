import React from "react";
import "./Todo.css";

export type TodoStruct = {
  id: number;
  task: string;
  completed?: boolean;
};

export type ToggleTodo = {
  toggleTodo: (id: number) => void;
};

export type TodoProps = TodoStruct & ToggleTodo;

function Todo({ task, completed = false, toggleTodo, id }: TodoProps) {
  const isValid: boolean = task.trim().length > 0;
  if (!isValid) return null;

  return (
    <li
      className="Todo"
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
      data-id={id}
      onClick={(e: React.MouseEvent<HTMLElement>) =>
        toggleTodo(parseInt(e.currentTarget.dataset["id"] || ""))
      }
    >
      <span style={{ color: completed ? "#ccc" : "white" }}>{task}</span>
    </li>
  );
}

export default Todo;
