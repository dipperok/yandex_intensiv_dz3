import { Header } from "../Header/Header"

export const Layout = (props) => {
    return <div>
        <header><Header/></header>
        <div>
            { props.children }
        </div>
        <footer></footer>
    </div>
}