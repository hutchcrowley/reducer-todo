import React from 'react';
import Todo from './Todo';

const TodoList = ({todoList, dispatch}) => {
    return (
        <div>
            {todoList.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch}/>)}
        </div>
    );
};

export default TodoList;