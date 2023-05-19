import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React, { useState } from 'react';
import { useVar } from './useVar';
import './App.css'; 

// DEFAULT TASKS FOR TESTING

// localStorage.setItem('TASKS', JSON.stringify([
//   {id: 0, text: "Task 1 - Cook chicken for your family", completed: true},
//   {id: 1, text: "Task 2 - Finish react project", completed: false},
//   {id: 2, text: "Task 3 - Continue studying for the finals", completed: false},
//   {id: 3, text: "Task 4 - Hang out with dog", completed: true},
//   {id: 4, text: "Task 5 - Prepare for the seminar on quantum computing", completed: true}
// ]))

function App() {
  const TASKS_KEY = 'TASKS'
  const SEARCH_VALUE_KEY = 'SEARCH_VALUE'

  const DEFAULT_TASKS = []
  const DEFAULT_SEARCH = ''

  const [tasks, setTasks] = useVar(TASKS_KEY, DEFAULT_TASKS)
  const [searchValue, setSearchValue] = useState(DEFAULT_SEARCH)

  let completedTasks = tasks.filter((task) => task.completed).length
  let totalTasks = tasks.length

  let searchedTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()))

  const onComplete = (taskId) => {
    let newTasks = [...tasks]
    let objIndex = newTasks.findIndex((task) => task.id == taskId)
    newTasks[objIndex].completed = !newTasks[objIndex].completed

    setTasks(newTasks)
  }

  const onDelete = (taskId) => {
    let newTasks = [...tasks]
    let objIndex = newTasks.findIndex((task) => task.id == taskId)
    newTasks.splice(objIndex, 1)
    setTasks(newTasks)
  }

  return (
    <>

      <TodoCounter 
        completed={completedTasks}
        total={totalTasks}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTasks.map(task => (<TodoItem 
          key={task.id}
          text={task.text} 
          completed={task.completed}
          onComplete={() => onComplete(task.id)}
          onDelete={() => onDelete(task.id)} />))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
