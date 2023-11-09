import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoItem } from '../CreateTodoItem/index';
import { Modal } from '../Modal';
import { ButtonCreateTodo } from '../ButtonCreateTodo';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';

function AppUI(){

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <CreateTodoItem />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0)  && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={() => {completeTodo(todo.text)}}
                        onDelete={() => {deleteTodo(todo.text)}}
                    />
                ))}
            </TodoList>

            <ButtonCreateTodo />

           {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
           )}
        </>
        );
}

export { AppUI };