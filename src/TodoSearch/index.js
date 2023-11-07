
import './TodoSearch.css';
import React from 'react';

function TodoSearch(props){
    return (
      <input 
        placeholder="Buscar..."
        className="todo-search"
        value={props.searchValue}
        onChange={(event) => {
          props.setSearchValue(event.target.value);
        }}
      />
    );
  }

export {TodoSearch};
