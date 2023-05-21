import { useState, createContext } from "react";
import { useLocalStorage } from "./utils/useLocalStorage";

const TodoContext = createContext(null)

function TodoProvider({ children }) {
  const TASKS_KEY = 'TASKS'
  const SEARCH_VALUE_KEY = 'SEARCH_VALUE'

  const DEFAULT_TASKS = []
  const DEFAULT_SEARCH = ''

  const {
    stateVar: tasks, 
    setVar: setTasks, 
    loadingState: taskLoadingState, 
    error: taskError
  } = useLocalStorage(TASKS_KEY, DEFAULT_TASKS)
  const [searchValue, setSearchValue] = useState(DEFAULT_SEARCH)

  let completedTasks = tasks.filter((task) => task.completed).length
  let totalTasks = tasks.length

  let searchedTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()))

  const onComplete = (taskId) => {
    let newTasks = [...tasks]
    let objIndex = newTasks.findIndex((task) => task.id === taskId)
    newTasks[objIndex].completed = !newTasks[objIndex].completed

    setTasks(newTasks)
  }

  const onDelete = (taskId) => {
    let newTasks = [...tasks]
    let objIndex = newTasks.findIndex((task) => task.id === taskId)
    newTasks.splice(objIndex, 1)
    setTasks(newTasks)
  }
  
  let notFound = !taskLoadingState && !taskError && searchValue && searchedTasks.length===0
  let noTasks = !taskLoadingState && !taskError && !searchValue && searchedTasks.length===0

  return (
    <TodoContext.Provider value={{
      completedTasks,
      totalTasks,
      searchValue,
      setSearchValue,
      taskLoadingState,
      taskError,
      notFound,
      noTasks,
      searchedTasks,
      onComplete,
      onDelete,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}
