import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { TodoStruct } from "./components/Todo/Todo";

function App() {
  const [todos, setTodos] = useState<Array<TodoStruct>>([]);

  const addTodo: (task: string) => void = (task) => {
    const newTodo = {
      id: todos.length + 1,
      task: task,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo: (id: number) => void = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
