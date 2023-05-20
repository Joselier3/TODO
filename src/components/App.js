import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { LoadingItem } from './LoadingItem';
import React, { useState } from 'react';
import { TodoContext, TodoProvider } from '../TodoContext';
import '../assets/App.css'; 

// DEFAULT TASKS FOR TESTING

// localStorage.setItem('TASKS', JSON.stringify([
//   {id: 0, text: "Task 1 - Cook chicken for your family", completed: true},
//   {id: 1, text: "Task 2 - Finish react project", completed: false},
//   {id: 2, text: "Task 3 - Continue studying for the finals", completed: false},
//   {id: 3, text: "Task 4 - Hang out with dog", completed: true},
//   {id: 4, text: "Task 5 - Prepare for the seminar on quantum computing", completed: true}
// ]))

function App() {
  const {
    taskLoadingState,
    taskError,
    notFound,
    noTasks,
    searchedTasks,
    onComplete,
    onDelete
  } = React.useContext(TodoContext)

  return (
    <TodoProvider>

      <TodoCounter />
      <TodoSearch />
      <TodoList>

        {taskLoadingState && (
          <>
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
          </>
        )}
        {taskError && (<p className='no-task-left'>There has been an error</p>)}
        {notFound && (<p className='no-task-left'>No tasks found</p>)}
        {noTasks && (<p className='no-task-left'>There are no tasks</p>)}

        {searchedTasks.map(task => (<TodoItem 
          key={task.id}
          text={task.text} 
          completed={task.completed}
          onComplete={() => onComplete(task.id)}
          onDelete={() => onDelete(task.id)} />))}
          
      </TodoList>

      <CreateTodoButton />

    </TodoProvider>
  );
}

export default App;
