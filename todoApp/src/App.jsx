import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")

  const handleChange = (e)=>{
    setText(e.target.value)
  }

  return (
    <div>
      <div>
        <input type="text" value = {text} onChange={handleChange} />
      </div>
    </div>
  )
}

export default App
