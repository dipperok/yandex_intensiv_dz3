import { BookCard } from "../BookCard/BookCard"
import styles from './styles.module.css'

export const BooksCards = ({books}) => {
    const a = [
        {
            num1: "1",
            num2: "2",
        }
    ]
    return <div className={styles.booksCards}>
        {
            books.map((book) => <BookCard key={book.id} book={book} nums="1"/>)
        }
    </div>
}