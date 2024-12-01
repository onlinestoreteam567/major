import Heading from '../Texts/Heading/Heading';
import cl from './index.module.scss';
import UserMessage from './UserMessage';
import UserRating from './UserRating';

export default function ReviewsCard({ review }) {
  return (
    <div className={cl.wrapReviewsCard}>
      <div className={cl.wrapUser}>
        <div className={cl.case}>
          <Heading type="h4">{review.user.user_name}</Heading>
          <UserRating review={review} />
        </div>
        <p>{review.user.data}</p>
      </div>
      <UserMessage review={review} />
    </div>
  );
}
