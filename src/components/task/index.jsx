/* eslint-disable react/prop-types */
import styles from './task.module.css'
import { AiFillDelete, AiFillCheckCircle } from "react-icons/ai";

export function Task({ task, onComplete, onDelete }) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <AiFillCheckCircle /> : < div />}
            </button>
            <p className={task.isCompleted ? styles.taskCompleted : ""}>{task.title}</p>
            <button className={styles.delBtn} onClick={() => onDelete(task.id)}>
                <AiFillDelete size={28} />
            </button>
        </div>
    )
}