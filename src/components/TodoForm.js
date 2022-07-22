import React, { useState } from 'react'

const TodoForm = (props) => {
    const [title, setTitle] = useState("")

    const handleChange = (event) => {
        const newTodoTitle = event.target.value
        setTitle(newTodoTitle)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addTodo(title)
        setTitle('')
    }

    const submitStyle = {
        backgroundColor: '#F3D2C1',
        color: '#001858',
        height: '72px',
        fontSize: '16px',
        fontWeight: '700',
        border: '3px solid #F3D2C1'
    }

    return (
        <div style={{ marginBottom: '32px' }}>
            <form onSubmit={(event) => handleSubmit(event)} >
                <input
                    type='text'
                    placeholder='Add your ToDo'

                    style={{
                        height: '66px', width: '40%', fontSize: '16px', border: '2px solid #F3D2C1', backgroundColor: '#FEF6E4'
                    }}
                    onChange={(event) => { handleChange(event) }}
                    value={title}
                />
                <button className='todo-button' style={submitStyle}>Add ToDo</button>
            </form>
        </div>
    );
}

export default TodoForm;