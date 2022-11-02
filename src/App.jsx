import { mockGenres } from './constants/mock.js'
import { Layout } from './components/Layout/Layout.jsx'
import { BooksPage } from './pages/BooksPage/BooksPage.jsx'
//import { BookPage } from './pages/BookPage/BooksPage.jsx'


export function App() {
    return <Layout>
        <BooksPage mockGenres={mockGenres}/>
    </Layout>
}