import '../assets/LoadingItem.css'  

function LoadingItem() {
  return (
    <li className='loading-todo-task'>
      <div className='loading-app-icon'></div>
      <p></p>
      <div className='loading-app-icon'></div>
    </li>
  )
}

export { LoadingItem }