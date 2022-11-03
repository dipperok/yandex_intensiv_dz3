import {useState} from "react";
import styles from './styles.module.css'


export const BookPageCard = ({book}) => {
    const [count, setCount] = useState(0);
    return <div>
         <div>
            <h1>{book.name}</h1>
            <p>{book.authors[0]}</p>
            <p>{book.subgenre}</p>
            <p>Оценка: {book.mark}</p>
            <p><b>{book.price} ₽</b></p>
        </div>
        <div>
            <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
            {count}
            <button onClick={() => setCount(count + 1)} disabled={count === 10}>+</button>
        </div>
    </div>
}