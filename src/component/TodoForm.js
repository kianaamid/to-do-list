import React from "react";

const TodoForm = () => {
  return (
    <form className="TodoForm">
      <input
        type="text"
        placeholder="What is the today task"
        className="todo-input"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
