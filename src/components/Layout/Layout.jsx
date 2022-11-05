import { Header } from "../Header/Header"

export const Layout = (props) => {
    return <div>
        <header><Header/></header>
            { props.children }
        <footer></footer>
    </div>
}