import '../assets/AddTaskForm.css'
import { AddTaskButton } from './AddTaskButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

function AddTaskForm() {
  const { setNewTask, closeAddTask: onCancelTask } = useContext(TodoContext)

  return (
    <form className='add-task-form'>

      <div className='form-title'>
        <h1>Create New Task</h1>

        <FontAwesomeIcon
          icon={icon({name:'x', style:'solid'})} 
          className='app-icon delete-icon'
          onClick={onCancelTask}/>
      </div>

      <div className='task-input-div'>
        <input className='task-input' 
        placeholder='Write a new task...'
        onChange={(event) => {
          event.preventDefault()
          setNewTask(event.target.value)
        }} autoFocus/>
      </div>

      <AddTaskButton />
    </form>
  )
}

export { AddTaskForm }