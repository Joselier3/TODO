import './TodoCounter.css'

function TodoCounter(props) {
  return (
    <h1>
      You have completed {props.completed} out of {props.total} tasks
    </h1>
  )
}

export { TodoCounter }