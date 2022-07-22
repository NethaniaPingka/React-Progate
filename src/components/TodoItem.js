import React, { useContext } from 'react'
import { TodoContext } from '../App'

const TodoItem = (props) => {
    const getStyle = () => {
        let textDecoration = ''
        if (props.todo.completed) {
            textDecoration = 'line-through'
        } else {
            textDecoration = 'none'
        }

        return {
            flexGrow: '2',
            textDecoration: textDecoration,
        }
    }

    const wrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        border: '2px solid #FEF6E4',
        padding: '12px',
        fontSize: '24px',
        backgroundColor: '#F3D2C1',
        color: '#001858',
        fontWeight: '500',
    }

    const buttonStyle = {
        backgroundColor: '#8BD3DD',
        color: '#FEF6E4',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        cursor: 'pointer',
        fontSize: '16px',
        border: '2px solid #FEF6E4'
    }

    /*const editButtonStyle = {
        height: '30px',
        width: '30px',
        marginLeft: '10px',
        backgroundColor: '#F582AE',
        border: '2px solid #FEF6E4',
        color: '#FEF6E4',
        borderRadius: '100%'
    }*/

    const { toggleCompleted, deleteTodo } = useContext(TodoContext)

    return (
        <div style={wrapperStyle}>
            <input
                type='checkbox'
                onChange={() => toggleCompleted(props.todo.id)}
            />
            <p style={getStyle()}>{props.todo.title}</p>
            <button style={buttonStyle} onClick={() => deleteTodo(props.todo.id)}>x</button>
        </div>
    )
}

export default TodoItem
