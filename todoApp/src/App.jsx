import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")

  return (
    <div>
      <div>
        <input type="text" value = {text} />
      </div>
    </div>
  )
}

export default App
