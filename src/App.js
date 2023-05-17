import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

function App() {

  const TODOTasks = [
    {id: 0, text: "Task 1", completed: true},
    {id: 1, text: "Task 2", completed: false},
    {id: 2, text: "Task 3", completed: false},
    {id: 3, text: "Task 4", completed: true},
    {id: 4, text: "Task 5", completed: true}
  ]

  return (
    <>

      <TodoCounter 
        completed={3}
        total={5}
      />
      <TodoSearch />

      <TodoList>
        {TODOTasks.map(task => (<TodoItem key={task.id} text={task.text} completed={task.completed} />))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
