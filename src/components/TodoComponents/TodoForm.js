import React from "react";

const TodoForm = ({ todoInput, handleTodoInput, handleSubmit, dispatch }) => {
    return (
        <form className="todo-form"
            onSubmit={handleSubmit}>
            <label>
                Add a todo:
             <input
                    type="text"
                    name="todoInput"
                    placeholder='Enter Todo'
                    value={todoInput}
                    onChange={e => handleTodoInput(e.target.value)}
                />
            </label>
            <button>Add Todo</button>
            <button onClick={e => {
                dispatch({ type: 'CLEAR' });
                e.preventDefault();
            }}>Clear</button>
        </form>
    );
};

export default TodoForm;
