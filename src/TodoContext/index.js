import React from "react";
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider({
    children
}){

  // Estados
  // const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

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

    if(text.length > 0){

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

        return !openModal;
      }
      else{
        alert('¡TODO ya existe!')
      }
    }
    else{
      alert('El TODO está vacío')
    }
    
    return  openModal;
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

    return (
        <TodoContext.Provider value={{
            loading,
            error,

            completedTodos,
            totalTodos,

            searchValue,
            setSearchValue,
            searchedTodos,

            addTodo,
            completeTodo,
            deleteTodo,

            openModal,
            setOpenModal
        }}>
            {children}    
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };