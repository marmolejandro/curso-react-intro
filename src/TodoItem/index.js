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

      {/* <span 
        className={`todo-item-check ${props.completed && "todo-item-check--checked"}`}
      >V</span> */}

      <p 
        className={`todo-item-text ${props.completed && "todo-item-text--completed"}`}
      >{props.text}</p>

      {/* <span 
        className="todo-item-delete"
        onClick={props.onDelete}
      >-</span> */}

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export {TodoItem};