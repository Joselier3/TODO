import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { TodoButton } from './TodoButton'

function AddTaskButton() {
  const addButtonStyle = {
    boxShadow: 'none',
    alignSelf: 'flex-start' 
  }

  return (
    <TodoButton
      buttonText={"Add Task"}
      buttonClass={'add-button'}
      style={addButtonStyle}
      type='submit'>
    </TodoButton>
  )    
}

export { AddTaskButton }