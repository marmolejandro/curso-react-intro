import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import './TodoItem.css';
import React from 'react';

function TodoItem(props){
  return (
    <li className={`todo-item ${props.completed && "todo-item-completed"}`}>

      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

      <p 
        className={`todo-item-text ${props.completed && "todo-item-text--completed"}`}
      >{props.text}</p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export {TodoItem};