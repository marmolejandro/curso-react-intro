import React from 'react';
import { TodoIcon } from './';

function DeleteIcon(props){

    return (
        <TodoIcon
            type="delete"
            color="#c7493b"
            onClick={props.onDelete}
        />
    );
}


export { DeleteIcon }