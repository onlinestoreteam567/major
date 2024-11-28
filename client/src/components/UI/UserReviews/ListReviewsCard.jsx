import cl from './index.module.scss';
import reviewsList from './reviewsList.json';
import ReviewsCard from './ReviewsCard';
import ArrowLeft from '@components/Icons/ArrowLeft';
import ArrowRight from '@components/Icons/ArrowRight';
import Heading from '../Texts/Heading/Heading';

export default function ListReviewsCard() {
  return (
    <div className={cl.wrapListReviewsCard}>
      <Heading type="h2">
        Відгуки про товар <br /> Флюїд шовк для тонкого волосся
      </Heading>
      <ul>
        {reviewsList.map((review) => (
          <li key={review.id}>
            <ReviewsCard review={review} />
          </li>
        ))}
      </ul>
      <div className={cl.wrapReviewBtn}>
        <button type="button">
          <ArrowLeft />
        </button>
        <button type="button">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
