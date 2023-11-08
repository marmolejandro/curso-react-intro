import React from 'react';
import { TodoIcon } from './';

function CompleteIcon(props){

    return (
        <TodoIcon
            type="check"
            color={props.completed ? 'green' : '#58715e80'}
            onClick={props.onComplete}
        />
    );
}


export { CompleteIcon }