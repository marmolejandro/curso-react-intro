import './TodoCounter.css';
import React from 'react';

function TodoCounter(props){
    return (
      <h2>
        Has completado <span>{props.completed}</span> de <span>{props.total}</span> TODOs
      </h2>
    );
  }

export {TodoCounter};
