import '../assets/TodoSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react'
import { TodoContext } from '../TodoContext'

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  return (
    <div className={'search-todo'}>
      <FontAwesomeIcon icon={icon({name:'magnifying-glass', style:'solid'})} className='app-icon'/>
      <input 
        placeholder="Search for a task..." 
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }}/>
    </div>
  )
}

export { TodoSearch }