import {useState} from "react";
import styles from './styles.module.css'

export const BookCard = ({book, nums}) => {
    console.log('num', nums);
    const [count, setCount] = useState(0);
    
    return <div className={styles.card}>
        <div>
            <p className={styles.bookName}><b>{book.name}</b></p>
            <p className={styles.bookCardText}>{book.authors[0]}</p>
            <p className={styles.bookCardText}>{book.subgenre}</p>
            <p className={`${styles.bookMark} ${styles.bookCardText}`}>Оценка: {book.mark}</p>
            <p className={styles.bookPrice}><b>{book.price} ₽</b></p>
        </div>
        <div className={nums ? styles.btnsDown : styles.btnsCenter}>
            <button className={styles.btn} onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
            <span className={styles.btnCount}>{count}</span>
            <button className={styles.btn} onClick={() => setCount(count + 1)} disabled={count === 10}>+</button>
        </div>
    </div>
}