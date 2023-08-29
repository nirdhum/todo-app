import todo from '../../assets/todo.svg'
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todo} alt="" />

            <form className={styles.newTaskForm}>
                <input type="text" placeholder='Add a New Task' />
                <button>
                    Create
                    <AiOutlinePlusCircle size={22} />
                </button>
            </form>
        </header>
    )
}