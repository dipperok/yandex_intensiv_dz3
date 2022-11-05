import { Annotation } from '../Annotation/Annotation'
import { BookCard } from '../BookCard/BookCard'
import styles from './styles.module.css'

export const BookInfo = ({book}) => {
    return <div className={styles.booksInfo}>
        <BookCard book={book} num={"2"}/>
        <Annotation book={book}/>
    </div>
}
