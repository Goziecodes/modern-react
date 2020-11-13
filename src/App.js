import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import TodoList from "./components/todos/TodoList/TodoList";

const App = () => (
  <div className="App">
    <TodoList />
  </div>
);

export default hot(module)(App);
