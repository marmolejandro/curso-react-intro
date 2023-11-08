import './TodoIcon.css';
import { ReactComponent as CheckSVG } from './check.svg'
import { ReactComponent as DeleteSVG } from './delete.svg'

const iconTypes = {
    "check": (color) => <CheckSVG className='icon-svg' fill={`${color}`}/>,
    "delete": (color) => <DeleteSVG className='icon-svg' fill={`${color}`}/>
}

function TodoIcon(props){

    return (
        <span 
            className={`icon-container icon-container-${props.type}`}
            onClick={props.onClick}
        >
            {iconTypes[props.type](props.color)}
        </span>
    )
}

export { TodoIcon }