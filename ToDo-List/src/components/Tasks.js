import Tas from "./Task"

const Task = ({ task, onDelete, onToggle }) => {
    
  return (
    <>
      {task.map((tasks)=>(
        <Tas key={tasks.id} 
        task={tasks}
        onDelete={onDelete}
        onToggle={onToggle}
        />
      ))}
    </>
  )
}

export default Task
