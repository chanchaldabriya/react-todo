import React from "react";

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
      {task}
    </li>
  );
}

export default Todo;
