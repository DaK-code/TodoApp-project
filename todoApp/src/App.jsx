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
        <button onClick={()=>handleTasks(text)}>Add New Task</button>
      </div>
      {tasks.map(task => <p>{task}</p>)}

    </div>
  )
}

export default App
