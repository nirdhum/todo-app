import styles from './task.module.css'

export function Task() {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div></div>
            </button>
        </div>
    )
}