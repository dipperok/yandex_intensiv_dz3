import styles from './styles.module.css'

export const Annotation = ({book}) => {
    return <div className={styles.annotation}>
        <h3 className={styles.h3}>Аннотация</h3>
        <p>{book.annotation}</p>
    </div>
}