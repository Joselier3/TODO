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

  const [openTaskForm, setOpenTask] = useState(false)

  const onAddTask = () => {
    setOpenTask(!openTaskForm)
  }

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
      openTaskForm,
      onAddTask,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}

// DEFAULT TASKS FOR TESTING

// localStorage.setItem('TASKS', JSON.stringify([
//   {id: 0, text: "Task 1 - Cook chicken for your family", completed: true},
//   {id: 1, text: "Task 2 - Finish react project", completed: false},
//   {id: 2, text: "Task 3 - Continue studying for the finals", completed: false},
//   {id: 3, text: "Task 4 - Hang out with dog", completed: true},
//   {id: 4, text: "Task 5 - Prepare for the seminar on quantum computing", completed: true}
// ]))