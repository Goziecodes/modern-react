import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../../../redux/actions.js";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreateTodo }) => {
  const [inputValue, setInputValue] = useState("");
  console.log(todos, "im here");
  return (
    <div className="wrapper">
      <div className="new-todo-form">
        <input
          className="new-todo-input"
          type="text"
          value={inputValue}
          placeholder="Type new todo"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            const isDuplicateText = todos.some(
              (todo) => todo.text === inputValue
            );
            if (!isDuplicateText) {
              onCreateTodo(inputValue);
              setInputValue("");
            }
          }}
          className="new-todo-button"
        >
          Create todo
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onCreateTodo: (text) => dispatch(createTodo(text)),
});

// export default NewTodoForm;
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
