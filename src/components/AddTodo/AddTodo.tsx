import React, { useState } from "react";

export interface AddTodoProps {
  addTodo: (task: string) => void;
}

function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState("");

  return (
    <div className="AddTodo">
      <input
        type="text"
        className="AddTodo-input"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        className="AddTodo-btn"
        onClick={(e) => {
          addTodo(text);
          setText("");
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTodo;
