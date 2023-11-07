import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage'

function App() {

  // Estados
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [newTodo, setNewTodo] = React.useState('');

  // Estados derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchedText = searchValue.toLowerCase();
    return todoText.includes(searchedText);
  })

  // Funcion
  const addTodo = (text) => {
    const newTodos = [...todos];// Clonar array
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    )

    if(todoIndex === -1){
      const newTodo = {
        text: text,
        completed: false
      }
      newTodos.push(newTodo);
      saveTodos(newTodos);
    }
    else{
      alert('TODO ya existe!')
    }

    setNewTodo('');
  }

  // Funcion
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  // Funcion
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    )
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return(
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      newTodo={newTodo}
      setNewTodo={setNewTodo}
      addTodo={addTodo}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;
