import { BookCard } from "../BookCard/BookCard"

export const BooksCards = ({books}) => {
    return <div>
        {
            books.map((book) => <BookCard key={book.id} book={book}/>)
        }
    </div>
}