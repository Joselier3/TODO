import './TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function TodoItem(props) {
  const doneIcon = props.completed ?
    icon({name:'circle-check', style:'solid'})
    : icon({name:'circle-check', style:'regular'})
  return (
    <li className='todo-task'>
      <FontAwesomeIcon 
        icon={doneIcon} 
        className={`app-icon done-icon ${props.completed ? 'done-icon--active' : ''}`}
        onClick={props.onComplete}/>
      <p className={props.completed ? 'done-task' : ''}>{props.text}</p>
      <FontAwesomeIcon 
        icon={icon({name:'x', style:'solid'})} 
        className='app-icon delete-icon'
        onClick={props.onDelete}/>
    </li>
  )
}

export { TodoItem }