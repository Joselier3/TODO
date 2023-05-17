import './TodoSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function TodoSearch() {
  return (
    <div className={'search-todo'}>
      <FontAwesomeIcon icon={icon({name:'magnifying-glass', style:'solid'})} className='app-icon'/>
      <input placeholder="Search for a task..." />
    </div>
  )
}

export { TodoSearch }