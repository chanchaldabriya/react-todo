import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { TodoProps } from "./components/Todo/Todo";

function App() {
  const [todos, setTodos] = useState<Array<TodoProps>>([
    {
      task: "Learn Typescript",
      completed: true,
    },
    {
      task: "Create React app using Typescript",
    },
    {
      task: "Create Todo app in React using TS",
      completed: false,
    },
  ]);

  const addTodo: (task: string) => void = (task) => {
    const newTodo = { 
      task: task 
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
