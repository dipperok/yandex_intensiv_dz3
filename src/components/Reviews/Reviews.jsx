import { Review } from '../Review/Review'
import styles from './styles.module.css'

export const Reviews = ({reviews}) => {
    return <div className={styles.reviews}>
        {
            reviews.map((review) => <Review key={review.id} review={review}/>)
        }
    </div>
}