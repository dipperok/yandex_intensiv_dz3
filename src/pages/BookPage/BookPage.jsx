import { BookInfo } from '../../components/BookInfo/BookInfo'
import { Reviews } from '../../components/Reviews/Reviews'
import styles from './styles.module.css'



export const BookPage = ({mockGenres}) => {
    console.log(mockGenres[0].books);
    return <div className={`${styles.main}`}>
        <BookInfo book={mockGenres[0].books[0]}/>
        <Reviews book={mockGenres[0].books[0]}/>
    </div>
}