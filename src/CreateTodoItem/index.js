import './CreateTodoItem.css';
import { FaPlus } from "react-icons/fa";
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoItem(){

    const {
        addTodo,
    } = React.useContext(TodoContext);

    //Estado
    const [newTodo, setNewTodo] = React.useState('')

    // Funcion
    const onClick = () => {
        const todoSaved = addTodo(newTodo);
        todoSaved && setNewTodo('');
    };

    // Funcion
    const onChange = (event) => {
        setNewTodo(event.target.value);
    };

    return (
    <>
        <div className="todo-item-create">
            <input 
                className='input-create-todo' 
                placeholder='Nuevo TODO'
                value={newTodo}
                onChange={onChange}
            ></input>
            <button
                title='Agregar TODO'
                className="todo-item-add"
                onClick={onClick}
            > <FaPlus /> </button>
        </div>
    </>
    );
}

export {CreateTodoItem};