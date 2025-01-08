import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./components/todo/todo.css"
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew />
      <TodoData />
    </div>
  )
}

export default App
