import React, { useState } from 'react'
import { Input } from './input'
import { Display } from './display'

const App = () => {
  const [task, setTask] = useState("")
  return (
    <div className='app_container'>
      <Input task={task} setTask={setTask}/>
      <Display task={task} setTask={setTask}/>
    </div>
  )
}

export default App