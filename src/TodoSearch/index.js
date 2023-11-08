
import './TodoSearch.css';
import { FaSistrix } from "react-icons/fa";
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch(props){
  
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  return (
      <div className='container-search'>
        <input 
          placeholder="Buscar..."
          className="todo-search"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />

        <FaSistrix 
          className='icon-search'
        />
      </div>
    );
}

export {TodoSearch};
