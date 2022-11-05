import { mockGenres } from './constants/mock.js'
import { Layout } from './components/Layout/Layout.jsx'
import { BooksPage } from './pages/BooksPage/BooksPage.jsx'
import { BookPage } from './pages/BookPage/BookPage.jsx'

//first page - <BooksPage mockGenres={mockGenres}/>
//second page - <BookPage mockGenres={mockGenres}/>

export function App() {
    return <Layout>
        <BooksPage mockGenres={mockGenres}/>
    </Layout>
}