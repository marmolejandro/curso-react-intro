import './TodoList.css';
import React from 'react';

function TodoList(props){
    return (
        <ul className="todo-list">
            {props.children}
        </ul>
    );
}

export { TodoList };