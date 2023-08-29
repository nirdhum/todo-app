import styles from './task.module.css'
import { AiFillDelete } from "react-icons/ai";

export function Task() {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />
            </button>
            <p>Molestiae pariatur provident, aliquam voluptatibus iure aliquid tempora necessitatibus mollitia excepturi!</p>
            <button className={styles.delBtn}>
                <AiFillDelete size={28} />
            </button>
        </div>
    )
}