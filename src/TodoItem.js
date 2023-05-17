import './TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function TodoItem(props) {
  let check_style = props.completed ? 'solid' : 'regular'
  console.log(check_style)
  return (
    <li className='todo-task'>
      <FontAwesomeIcon 
        icon={icon({name:'circle-check', style:'regular'})} 
        className='app-icon done-icon'/>
      <p className={props.completed ? 'done-task' : ''}>{props.text}</p>
      <FontAwesomeIcon icon={icon({name:'x', style:'solid'})} className='app-icon delete-icon'/>
    </li>
  )
}

export { TodoItem }