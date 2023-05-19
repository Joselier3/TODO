import './TodoList.css'

function TodoList(props) {
  return (
    <ul className="task-list">
      {props.children.length != 0 ? props.children : (<p className='no-task-left'>There are no tasks</p>)}
    </ul>
  )
}

export { TodoList }