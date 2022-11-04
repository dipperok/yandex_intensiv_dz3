import { BookInfo } from '../../components/BookInfo/BookInfo'
import { Reviews } from '../../components/Reviews/Reviews'
import styles from './styles.module.css'

export const BookPage = ({mockGenres}) => {
    return <div className={`${styles.main}`}>
        <BookInfo book={mockGenres[0].books[0]}/>
        <Reviews reviews={mockGenres[0].books[0].reviews}/>
    </div>
}