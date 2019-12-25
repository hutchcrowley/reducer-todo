import React from "react";

const TodoForm = ({
  todoInput,
  handleTodoInput,
  handleSubmit,
  clearAll,
  dispatch
}) => {
  return (
    // Input form for todo list
    <form className="todo-form" onSubmit={handleSubmit} clearAll={clearAll}>
      {/* Input text box for a new todo item */}
      <label>
        <h3>Add a ToDo Item!</h3>
        <input
          type="text"
          name="todoInput"
          placeholder="Enter Todo"
          value={todoInput}
          onChange={e => handleTodoInput(e.target.value)}
        />
      </label>

      <button 
      className="button button-primary" 
      >
        Add Todo
      </button>
      <button
        className="button button-primary"
        onClick={e => {
          dispatch({ type: "CLEAR" });
          e.preventDefault();
        }}
      >
        Clear
      </button>
      <button
        className="button button-primary"
        onClick={e => {
          dispatch({ type: "CLEAR_ALL" });
          e.preventDefault();
        }}
      >
        Clear All
      </button>
    </form>
  );
};

export default TodoForm;
