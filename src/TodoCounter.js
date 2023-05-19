import './TodoCounter.css'

function TodoCounter(props) {
  return props.completed !== props.total 
    ? (<h1>
        You have completed {props.completed} out of {props.total} tasks
      </h1>)
    : (<h1>
        You have completed all tasks
      </h1>)
}

export { TodoCounter }