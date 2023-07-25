
const Button = ({onClick, text, color}) => {
  return (
    <button style={{background:color}} className="btn" onClick={onClick}>{text}</button>
  )
}

export default Button
