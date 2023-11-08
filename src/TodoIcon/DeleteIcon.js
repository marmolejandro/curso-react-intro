import React from 'react';
import { TodoIcon } from './';

function DeleteIcon(props){

    return (
        <TodoIcon
            type="delete"
            color="#af443873"
            onClick={props.onDelete}
        />
    );
}


export { DeleteIcon }