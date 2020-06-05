import React from "react";
import Todo, { TodoStruct, ToggleTodo } from "../Todo/Todo";

export type TodoListStruct =  {
  todos: Array<TodoStruct>;
}

export type TodoListProps = TodoListStruct & ToggleTodo;

function TodoList({ todos, toggleTodo }: TodoListProps) {
  if(todos.length <= 0)
    return null;
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <Todo key={`todo-${todo.id}`} toggleTodo={toggleTodo} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
