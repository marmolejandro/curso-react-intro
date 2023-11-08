
import './TodoSearch.css';
import { FaSistrix } from "react-icons/fa";
import React from 'react';

function TodoSearch(props){
    return (
      <div className='container-search'>
        <input 
          placeholder="Buscar..."
          className="todo-search"
          value={props.searchValue}
          onChange={(event) => {
            props.setSearchValue(event.target.value);
          }}
        />

        <FaSistrix 
          className='icon-search'
        />
      </div>
    );
  }

export {TodoSearch};
