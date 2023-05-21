import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { LoadingItem } from './LoadingItem';
import React from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from './Modal';
import { AddTaskForm } from './AddTaskForm';
import '../assets/App.css'; 

function TodoPage() {
  const {
    taskLoadingState,
    taskError,
    notFound,
    noTasks,
    searchedTasks,
    onComplete,
    onDelete,
    openTaskForm,
  } = React.useContext(TodoContext)

  return (
    <>
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

        {searchedTasks.map(task => <TodoItem 
          key={task.id}
          text={task.text} 
          completed={task.completed}
          onComplete={() => onComplete(task.id)}
          onDelete={() => onDelete(task.id)} />)}
          
      </TodoList>

      <CreateTodoButton />

      {openTaskForm && (
        <Modal>
          <AddTaskForm />
        </Modal>
      )}
    </>
  )
}

export {TodoPage}