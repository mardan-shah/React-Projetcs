import Header from './components/Header'
import Task from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [task, setTask] = useState([
        {
            id : 1,
            text : 'Doctors Appontment',
            day : 'feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id : 2,
            text : 'Meeting at School',
            day : 'march 5th at 2:30pm',
            reminder: true,
        },
        {
            id : 3,
            text : 'food',
            day : 'jan 2nd at 2:30pm',
            reminder: false,
        }
    ])
    //add task
    const addTask = (tas)=>{
      console.log(tas)

      const id = Math.floor(Math.random() * 10000) + 3;
      const newTask= {id, ...tas}
      setTask([...task, newTask])
    }
    //delete a task
    const deleteTask = id => {
      setTask(task.filter(tasks=> tasks.id!==id))
    }
    //Toggle reminder
    const toggleReminder= id=>{
      setTask(task.map(tasks=>tasks.id ===id ? {...tasks, reminder: !tasks.reminder}: tasks))
    }
  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)}  showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
        {
          task.length > 0 ?
          (<Task task={task} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('There is nothing here')
        }
      
    </div>
  );
}

export default App;
