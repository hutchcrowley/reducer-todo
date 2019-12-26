import React, { useReducer, useEffect } from 'react'
// Import the form and list components
import TodoForm from '../src/components/TodoComponents/TodoForm'
import TodoList from '../src/components/TodoComponents/TodoList'
// Import custom hooks
import { useInput } from './components/hooks/useInput'
import { initialState, reducer } from './reducers/reducer'

import './App.css'

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state.

const App = () => {
  //   Custom hook that handles input data
  const [todoInput, setTodoInput, handleTodoInput, value] = useInput([])

  //  Calling the useReducer hook, taking the state of the todoList on first render, pulling the data from local storage if there is any, and if not, returning the initialState, which is a blank array, set in the reducer file.
  const [todoList, dispatch] = useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem('todoList')
    return localData ? JSON.parse(localData) : initialState
  })

  //   Using the useEffect hook to update the state when todoList is changed. Also, stringifying the todoList object and setting it to local storage.
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  console.log('Initial state in the App component: ', initialState)

//   Function to handle adding a todo item.
  const handleSubmit = event => {
    const value = event.target.todoInput.value
    if (todoInput !== '') {
      dispatch({
        type: 'ADD',
        payload: value
      })
      setTodoInput('')
    } else {
      alert('Enter a new ToDo!')
    }
    event.preventDefault()
  }

  const clearAll = (todoList, initialState) => {
    if (todoList !== initialState) {
      console.log(todoList)
      dispatch({
        type: 'CLEAR_ALL',
        payload: initialState
      })
    }
  }

  // Display the Todo List
  return (
    <div className='App'>
      <div className='container'>
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
  )
}

export default App
