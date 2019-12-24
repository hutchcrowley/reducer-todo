import React, { useReducer } from "react";

import TodoForm from '../src/components/TodoComponents/TodoForm';
import TodoList from '../src/components/TodoComponents/TodoList';
import { useInput } from './components/useInput';

import { todos, reducer } from './reducers/reducer';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state.

const App = () => {
  //  Use the useReducer hook, destructure two properties: state, dispatch. Pass in reducer and initialState to the function
  const [todoList, dispatch] = useReducer(reducer, todos);
  const [todoInput, setTodoInput, handleTodoInput] = useInput('');

  console.log(todos);

  const handleSubmit = event => {
    const value = event.target.todoInput.value;
    dispatch({
      type: 'ADD',
      payload: value
    })
    setTodoInput('');
    console.log(event.target.value);
    event.preventDefault();

  }


  // Display the Todo List
  return (
    <div className='container'>
      <h1 className='app-header-one'>ToDo List:</h1>
      <TodoForm
        todoInput={todoInput}
        handleTodoInput={handleTodoInput}
        handleSubmit={handleSubmit}
        dispatch={dispatch}
      />
      <TodoList 
      todoList={todoList}
      dispatch={dispatch}
      />
    </div>
  );
}


export default App;