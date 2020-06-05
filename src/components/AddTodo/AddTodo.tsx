import React, { useState } from "react";
import './AddTodo.css';

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
        placeholder={"Enter New task"}
        value={text}
      />
      <button
        className="AddTodo-btn"
        onClick={() => {
          if(text.trim()) {
            addTodo(text);
            setText("");
          }
        }}
        disabled={!(text.trim().length > 0)}
      >
        + Add Task
      </button>
    </div>
  );
}

export default AddTodo;
