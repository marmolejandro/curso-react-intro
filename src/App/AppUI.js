
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoItem } from '../CreateTodoItem/index';

function AppUI({
    // Props explicitos
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    newTodo,
    setNewTodo,
    addTodo,
    completeTodo,
    deleteTodo
}){
    return (
        <>
            <TodoCounter 
            completed={completedTodos} 
            total={totalTodos}
            />
            <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />

            <TodoList>
                <CreateTodoItem
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    onAddTodo={() => {newTodo.length > 0 && addTodo(newTodo)}}
                />
            </TodoList>

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
        </>
        );
}

export { AppUI };