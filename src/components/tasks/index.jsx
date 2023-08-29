import styles from './tasks.module.css';
import { Task } from '../task';

export function Tasks() {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Created Task</p>
                    <span>10</span>
                </div>
                <div>
                    <p className={styles.completed}>Completed Tasks</p>
                    <span>1 of 10</span>
                </div>
            </header>

            <div className={styles.list}>
                <Task />
            </div>
        </section>
    )
}