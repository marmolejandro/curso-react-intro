import './CreateTodoItem.css';
import { FaPlus } from "react-icons/fa";
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoItem(){

    const {
        newTodo,
        setNewTodo,
        addTodo,
    } = React.useContext(TodoContext);

    return (
    <>
        <div className="todo-item-create">
            <input 
                className='input-create-todo' 
                placeholder='Nuevo TODO'
                value={newTodo}
                onChange={(event) => {
                    setNewTodo(event.target.value)
                }}
            ></input>
            <button
                title='Agregar TODO'
                className="todo-item-add"
                onClick={() => {newTodo.length > 0 && addTodo(newTodo)}}
            > <FaPlus /> </button>
        </div>
    </>
    );
}

export {CreateTodoItem};