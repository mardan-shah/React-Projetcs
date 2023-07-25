import Button from "./Button"
const Header = ({onAdd, showAdd}) => {
    
  return (
    <header className="header">
        <h1>Task traker</h1>
        <Button color={ showAdd ? "red" : "green"} text={ showAdd ? "close" : "Add"}  onClick={onAdd} />
        
    </header>
  )
}

export default Header
