import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { TodoButton } from './TodoButton'

function AddTaskButton() {
  const { onAddTask } = useContext(TodoContext)
  const addButtonStyle = {
    boxShadow: 'none',
    alignSelf: 'flex-start' 
  }

  return (
    <TodoButton
      onClick={() => onAddTask()}
      buttonText={"Add Task"}
      buttonClass={'add-button'}
      style={addButtonStyle}
      type='submit'>
    </TodoButton>
  )    
}

export { AddTaskButton }