import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { TodoButton } from './TodoButton'

function AddButton() {
  const { openAddTask: onClickAddTaskButton } = useContext(TodoContext)
  const addButtonStyle = {
    position: 'fixed',
    bottom: "2em"
  }

  return (
    <TodoButton
      onClick={onClickAddTaskButton}
      buttonText={"Add Task"}
      buttonClass={'add-button'}
      style={addButtonStyle}>
      <FontAwesomeIcon icon={icon({name: 'plus', style: 'solid'})} className='app-icon'/>
    </TodoButton>
  )    
}

export { AddButton }