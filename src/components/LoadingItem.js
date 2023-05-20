import '../assets/LoadingItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

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