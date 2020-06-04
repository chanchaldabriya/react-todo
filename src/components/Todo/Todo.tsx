import React from "react";

export interface TodoProps {
  task: string;
  completed?: boolean;
}

function Todo({ task, completed = false }: TodoProps) {
  return (
    <li
      className="Todo"
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {task}
    </li>
  );
}

export default Todo;
