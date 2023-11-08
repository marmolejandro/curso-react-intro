import './CreateTodoItem.css';
import { FaPlus } from "react-icons/fa";
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
            title='Agregar TODO'
            className="todo-item-add"
            onClick={props.onAddTodo}
        > <FaPlus /> </button>
    </li>
    );
}

export {CreateTodoItem};