import { Annotation } from '../Annotation/Annotation'
import { BookPageCard } from '../BookPageCard/BookPageCard'
import styles from './styles.module.css'

export const BookInfo = ({book}) => {
    return <div className={`${styles.booksInfo}`}>
        <BookPageCard book={book}/>
        <Annotation/>
    </div>
}