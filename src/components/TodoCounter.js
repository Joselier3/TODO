import React from 'react'
import '../assets/TodoCounter.css'
import { TodoContext } from '../contexts/TodoContext'

function TodoCounter() {
  const {completedTasks: completed, totalTasks:total} = React.useContext(TodoContext)

  return completed !== total 
    ? (<h1>
        You have completed {completed} out of {total} tasks
      </h1>)
    : (<h1>
        You have completed all tasks
      </h1>)
}

export { TodoCounter }