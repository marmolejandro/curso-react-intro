
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoItem } from '../CreateTodoItem/index';

function AppUI({
    // Props explicitos
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