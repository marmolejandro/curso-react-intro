import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm(){

    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    //Estado
    const [newTodo, setNewTodo] = React.useState('')

    // Funcion
    const onSubmit = (event) => {
        event.preventDefault();
        const todoSaved = addTodo(newTodo);
        setOpenModal(todoSaved);
        todoSaved && setNewTodo('');
    };
    
    // Funcion
    const onCancel = () => {
        setOpenModal(false)
    };

    // Funcion
    const onChange = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>

            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Nuevo TODO"
                value={newTodo}
                onChange={onChange}
            />

            <div className="button-container">
                <button
                    type="button"
                    className="button-cancel"
                    onClick={onCancel}
                >Cancelar</button>

                <button
                    type="submit"
                    className="button-add"
                    onClick={onSubmit}
                >Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm };