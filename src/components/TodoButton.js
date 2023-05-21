import '../assets/TodoButton.css'

function TodoButton(props) {

  return (
    <button 
    className="todo-button"
    onClick={props.onClick}
    style={props.style}>
      {props.children}
      <p>{props.buttonText}</p>
    </button>
  )
}

export { TodoButton }