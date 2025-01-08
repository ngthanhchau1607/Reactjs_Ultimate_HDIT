import { useState } from 'react'
const TodoNew = (props) => {

    const [valueInput, setvalueInput] = useState("Chau")

    const { addNewTodo } = props

    const handleClick = () => {
        addNewTodo(valueInput)
        setvalueInput("")
    }

    const handleOnChange = (name) => {
        setvalueInput(name)
    }

    return (
        <div>
            <input type='text'
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            />
            <button
                onClick={handleClick}
            >Add</button>
            <div>
                My name is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;