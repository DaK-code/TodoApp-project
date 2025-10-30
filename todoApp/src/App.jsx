import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([])

  const handleChange = (e)=>{
    setText(e.target.value)
  }

  const handleTasks = (text) =>{
    const newTask = [...tasks, text]
    setTasks(newTask)
    setText("")
  }

  return (
    <div>
      <div>
        <input type="text" value = {text} onChange={handleChange} />
        {
        (text)==="" ? <button>Add New Task </button> :
         <button style={{background : 'blue'}} onClick={()=>handleTasks(text)}>
          Add New Task
          </button> }
        
      </div>
      {tasks.map(task => <p>{task}</p>)}

    </div>
  )
}

export default App
