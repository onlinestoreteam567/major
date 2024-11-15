import cl from './index.module.scss';
import reviewsList from './reviewsList.json';
import ReviewsCard from './ReviewsCard';
import ArrowLeft from '@components/Icons/ArrowLeft';
import ArrowRight from '@components/Icons/ArrowRight';

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
      <div className={cl.wrapReviewBtn}>
        <button type="button" className={cl.wrapBtnArrow}>
          <ArrowLeft />
        </button>
        <button type="button" className={cl.wrapBtnArrow}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
