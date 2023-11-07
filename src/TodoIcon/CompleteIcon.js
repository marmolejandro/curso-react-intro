import React from 'react';
import { TodoIcon } from './';

function CompleteIcon(props){

    return (
        <TodoIcon
            type="check"
            color={props.completed ? 'green' : 'rgb(88 113 94)'}
            onClick={props.onComplete}
        />
    );
}


export { CompleteIcon }