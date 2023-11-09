import './ButtonCreateTodo.css';
import { FaPlus } from "react-icons/fa";
import React from 'react';
import { TodoContext } from '../TodoContext';


function ButtonCreateTodo(){

    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <button
            title='Agregar TODO con Modal'
            className="todo-item-add-modal"
            onClick={() => {setOpenModal(!openModal)}}
        > <FaPlus /> </button>
    );
}

export { ButtonCreateTodo };