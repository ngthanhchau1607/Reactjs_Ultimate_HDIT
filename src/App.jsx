import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./components/todo/todo.css"
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'

const App = () => {
  const [count, setCount] = useState(0)

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Thanh CHau" },
    { id: 2, name: "Thanh Phu" },
  ])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomNumberInRange(1, 20),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }
  const randomNumberInRange = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        todoList={todoList}
        deleteTodo={deleteTodo}
      />

    </div>
  )
}

export default App
