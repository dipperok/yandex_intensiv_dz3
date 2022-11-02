import { BooksCards } from "../../components/BooksCards/BooksCards"
import { useState } from "react"
import styles from './styles.module.css'


export const BooksPage = (props) => {
    const [activeGenre, setActiveCinema] = useState(props.mockGenres[0]);
    return <div className={`${styles.main}`}>
        <div className={`${styles.genres}`}>
        {
            //props.cinemas.map((cinema) => <button key={cinema.id} onClick={() => setActiveCinema(cinema)}>{cinema.name}</button>)
            props.mockGenres.map((genre) =><p key={genre.id} onClick={() => {setActiveCinema(genre)
            console.log(activeGenre.name)}}>{genre.name}</p>)
        }
        </div>
        <BooksCards books={activeGenre.books}/>
    </div>
}