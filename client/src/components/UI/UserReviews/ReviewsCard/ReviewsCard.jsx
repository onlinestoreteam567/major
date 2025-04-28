import Heading from '../../Texts/Heading/Heading';
import cl from './index.module.scss';
import UserRating from '../UserRating/UserRating';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';

export default function ReviewsCard({ review }) {
  return (
    <div className={cl.wrapReviewsCard}>
      <div className={cl.wrapUser}>
        <div className={cl.case}>
          <Heading type="h4">{review.user_name}</Heading>
          <UserRating review={review} />
        </div>
        <p>{review.date}</p>
      </div>
      <div className={cl.wrapMessage}>
        <Paragraph type="body2" className={cl.title}>
          {review.review_text}
        </Paragraph>
      </div>
    </div>
  );
}
