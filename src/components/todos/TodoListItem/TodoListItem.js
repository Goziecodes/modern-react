import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, handleRemove, handleComplete }) => (
  <div
    className={
      todo.isCompleted ? "todo-item-container completed" : "todo-item-container"
    }
  >
    <h3>{todo.text}</h3>
    <div className="btns-container">
      <button
        onClick={() => handleComplete(todo.text)}
        className="btn btn-complete"
      >
        Completed
      </button>
      <button
        onClick={() => handleRemove(todo.text)}
        className="btn btn-remove"
      >
        remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
