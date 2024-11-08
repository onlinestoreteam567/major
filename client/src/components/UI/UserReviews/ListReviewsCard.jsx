import cl from './index.module.scss';
import reviewsList from './reviewsList.json';
import ReviewsCard from './ReviewsCard';

export default function ListReviewsCard() {
  return (
    <div className={cl.wrapListReviewsCard}>
      <ul>
        {reviewsList.map((review) => (
          <li key={review.id}>
            <ReviewsCard review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
}
