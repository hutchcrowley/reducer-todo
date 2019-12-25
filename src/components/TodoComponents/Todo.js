import React from 'react';

const Todo = ({ todo, dispatch }) => {
    return (
        <div className='todo-item'>
            <div className='item' style={todo.completed ? 
            {textDecoration: 'line-through'} : {}} onClick={() => 
            dispatch({type: 'toggle', payload: todo.id})}>{todo.item}</div>
        </div>
    );
};

export default Todo;