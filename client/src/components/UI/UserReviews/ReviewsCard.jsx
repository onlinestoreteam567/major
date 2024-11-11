import cl from './index.module.scss';
import UserData from './UserData';
import UserMessage from './UserMessage';
import UserRating from './UserRating';

export default function ReviewsCard({ review }) {
  return (
    <div className={cl.wrapReviewsCard}>
      <UserData review={review} />
      <UserRating review={review} />
      <UserMessage review={review} />
    </div>
  );
}
