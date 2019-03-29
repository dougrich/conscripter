function Counter(props) {
  return (
    <button onClick={props.onClick}>{props.counter}</button>
  )
}

export default Counter