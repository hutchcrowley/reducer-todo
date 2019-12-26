import React, { useReducer } from "react";

import TodoForm from "../src/components/TodoComponents/TodoForm";
import TodoList from "../src/components/TodoComponents/TodoList";
import { useInput } from "./components/hooks/useInput";

import { initialState, reducer } from "./reducers/reducer";

import "./App.css";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state.

const App = () => {
  //  Use the useReducer hook, destructure two properties: state, dispatch. Pass in reducer and initialState to the function
  const [todoList, dispatch] = useReducer(reducer, initialState);
  const [todoInput, setTodoInput, handleTodoInput, value] = useInput([]);

  console.log(initialState);

  const handleSubmit = event => {
    const value = event.target.todoInput.value;
    if (todoInput !== "") {
      dispatch({
        type: "ADD",
        payload: value
      });
      setTodoInput("");
      console.log(event.target.todoInput.value);
    } else {
      alert("Enter a new ToDo!");
    }
    event.preventDefault();
  };

  const clearAll = (todoList, initialState) => {
    if (todoList !== initialState) {
      console.log(todoList);
      dispatch({
        type: "CLEAR_ALL",
        payload: initialState
      });
    }
  };

  // Display the Todo List
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List:</h1>
        <TodoForm
          todoInput={todoInput}
          handleTodoInput={handleTodoInput}
          handleSubmit={handleSubmit}
          dispatch={dispatch}
          clearAll={clearAll}
          value={value}
        />
      </div>
      <TodoList todoList={todoList} dispatch={dispatch} />
    </div>
  );
};

export default App;
