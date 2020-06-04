import React from "react";
import Todo, { TodoProps } from "../Todo/Todo";

export interface TodoListProps {
  todos: Array<TodoProps>;
}

function TodoList({ todos }: TodoListProps) {
  return (
    <ul className="TodoList">
      {todos.map((todo, index) => (
        <Todo key={`todo-${index}`} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
