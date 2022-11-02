import kor from "./kor2.svg"
import styles from './styles.module.css'

export const Header = () => {
    return <div className={`${styles.header}`}>
        <h1 className={`${styles.h1}`}>Магазин</h1>
        <img src={kor} alt="korzina" className={`${styles.korzina}`}/>
    </div>
}