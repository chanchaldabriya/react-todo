import React from "react";
import "./AddTodo.css";
import { useTextInput } from "../../hooks/useTextInput";

export interface AddTodoProps {
  addTodo: (task: string) => void;
}

function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText, resetText] = useTextInput("");

  return (
    <div className="AddTodo">
      <input
        type="text"
        className="AddTodo-input"
        onChange={setText}
        placeholder={"Enter New task"}
        value={text}
      />
      <button
        className="AddTodo-btn"
        onClick={() => {
          if (text.trim()) {
            addTodo(text);
            resetText();
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
