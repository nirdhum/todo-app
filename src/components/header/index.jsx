/* eslint-disable react/prop-types */
import todo from '../../assets/todo.svg'
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from './header.module.css';
import { useState } from 'react';

export function Header({ onAddTask }) {

    const [title, setTitle] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        if (title == '') {
            return null;
        } else {
            onAddTask(title)
            setTitle('')
        }
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    return (
        <header className={styles.header}>
            <img src={todo} alt="" />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input type="text" placeholder='Add a New Task' value={title} onChange={onChangeTitle} />
                <button>
                    Create
                    <AiOutlinePlusCircle size={22} />
                </button>
            </form>
        </header>
    )
}