import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

const defaultTasks = [
  {id: 0, text: "Task 1 - Cook chicken for your family", completed: true},
  {id: 1, text: "Task 2 - Finish react project", completed: false},
  {id: 2, text: "Task 3 - Continue studying for the finals", completed: false},
  {id: 3, text: "Task 4 - Hang out with dog", completed: true},
  {id: 4, text: "Task 5 - Prepare for the seminar on quantum computing", completed: true}
]

function App() {
  const [tasks, setTasks] = React.useState(defaultTasks)
  const [searchValue, setSearchValue] = React.useState('')

  let completedTasks = tasks.filter((task) => task.completed).length
  let totalTasks = tasks.length

  let searchedTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()))

  const onComplete = (taskId) => {
    let newTasks = [...tasks]
    let objIndex = newTasks.findIndex((task) => task.id == taskId)
    newTasks[objIndex].completed = !newTasks[objIndex].completed

    console.log(`TASK ID: ${taskId}`)
    console.log(`OBJECT INDEX: ${objIndex}`)

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
