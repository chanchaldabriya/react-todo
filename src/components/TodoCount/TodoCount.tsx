import React from "react";
import "./TodoCount.css";
import { TodoListStruct } from "../TodoList/TodoList";

export default function TodoCount({ todos }: TodoListStruct) {
  const completeCount: number = todos.filter(
    (todo) => todo.hasOwnProperty("completed") && todo["completed"]
  ).length;
  const totalCount: number = todos.length;

  if (todos.length <= 0) return null;
  return (
    <div className="TodoCount">
      <span className="TodoCount-label">Total todos remaining :</span>
      <span className="TodoCount-count">
        {totalCount - completeCount} out of {totalCount}
      </span>
    </div>
  );
}
