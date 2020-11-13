import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "../NewTodoForm/NewTodoForm.js";
import TodoListItem from "../TodoListItem/TodoListItem.js";
import { removeTodo, completeTodo } from "../../../redux/actions.js";

import "./TodoList.css";

const TodoList = ({ todos = [], onRemoveTodo, onCompleteTodo }) => (
  <div className="list-wrappper">
    <NewTodoForm />

    <div className="list__container">
      {todos.map((todo, index) => (
        <TodoListItem
          id="index"
          todo={todo}
          handleRemove={onRemoveTodo}
          handleComplete={onCompleteTodo}
        />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodo: (todoText) => dispatch(removeTodo(todoText)),
  onCompleteTodo: (todoText) => dispatch(completeTodo(todoText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
