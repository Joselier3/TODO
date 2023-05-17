import './CreateTodoButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function CreateTodoButton() {
  return (
    <button className="create-button">
      <FontAwesomeIcon icon={icon({name:'plus', style:'solid'})} className='app-icon add-icon'/>
      <p>Add Task</p>
    </button>
  )
}

export { CreateTodoButton }