import { BooksCards } from "../../components/BooksCards/BooksCards"
import { useState } from "react"
import styles from './styles.module.css'


export const BooksPage = (props) => {
    const [activeGenre, setActiveGenre] = useState(props.mockGenres[0])
    return <div className={styles.main}>
        <div className={styles.genres}>
        {
            props.mockGenres.map((genre) =><p className={`${genre.name === activeGenre.name ? styles.selectedGenre : styles.notSelectedGenre}`} key={genre.id} onClick={() => {setActiveGenre(genre)}}>{genre.name}</p>)
        }
        </div>
        {console.log(activeGenre)}
        <BooksCards books={activeGenre.books}/>
    </div>
    
}