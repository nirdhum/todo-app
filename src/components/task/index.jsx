/* eslint-disable react/prop-types */
import styles from './task.module.css'
import { AiFillDelete } from "react-icons/ai";

export function Task({ task }) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />
            </button>
            <p>{task.title}</p>
            <button className={styles.delBtn}>
                <AiFillDelete size={28} />
            </button>
        </div>
    )
}