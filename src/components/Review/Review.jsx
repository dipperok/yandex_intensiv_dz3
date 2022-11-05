import styles from './styles.module.css'

export const Review = ({review}) => {
    return <div className={styles.review}>
        <div className={styles.reviewHeader}>
            <p className={styles.reviewUserName}>{review.user.name}</p>
            <p>Оценка: {review.rating}</p>
        </div>
        <p>{review.text}</p>
    </div>
}