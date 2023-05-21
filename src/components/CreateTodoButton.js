import '../assets/CreateTodoButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

function CreateTodoButton() {
  const { onAddTask } = useContext(TodoContext)

  return (
    <button 
    className="create-button"
    onClick={onAddTask}>
      <FontAwesomeIcon icon={icon({name:'plus', style:'solid'})} className='app-icon add-icon'/>
      <p>Add Task</p>
    </button>
  )
}

export { CreateTodoButton }