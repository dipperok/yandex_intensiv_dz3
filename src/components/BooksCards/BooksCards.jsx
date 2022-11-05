import { BookCard } from "../BookCard/BookCard"
import styles from './styles.module.css'

export const BooksCards = ({books}) => {

    return <div className={styles.booksCards}>
        {
            books.map((book) => <BookCard key={book.id} book={book} nums/>)
        }
    </div>
}