import styles from './styles.module.css'

export const Review = ({review}) => {
    console.log(review)
    return <div className={`${styles.review}`}>
        <div>
            <p>{review.user.name}</p>
            <p>Оценка: {review.rating}</p>
        </div>
        <p>{review.text}</p>
    </div>
}