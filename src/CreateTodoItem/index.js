import './CreateTodoItem.css';
import React from 'react';

function CreateTodoItem(props){

    return (
    <li className="todo-item-create">
        <input 
            className='input-create-todo' 
            placeholder='Nuevo TODO'
            value={props.newTodo}
            onChange={(event) => {
                props.setNewTodo(event.target.value)
            }}
        ></input>
        <button 
            className="todo-item-add"
            onClick={props.onAddTodo}
        >+</button>
    </li>
    );
}

export {CreateTodoItem};