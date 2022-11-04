import { BooksCards } from "../../components/BooksCards/BooksCards"
import { useState } from "react"
import styles from './styles.module.css'


export const BooksPage = (props) => {
    const [activeGenre, setActiveGenre] = useState(props.mockGenres[0]);
    return <div className={`${styles.main}`}>
        <div className={`${styles.genres}`}>
        {
            props.mockGenres.map((genre) =><p key={genre.id} onClick={() => {setActiveGenre(genre)}}>{genre.name}</p>)
        }
        </div>

        <BooksCards books={activeGenre.books}/>
    </div>
}