import Spinner from '@components/helpers/Spinner/Spinner';
import { loadReviews, selectReviews } from '@redux/selectors';
import { useSelector } from 'react-redux';
import cl from './index.module.scss';
import ReviewCard from './ReviewCard/ReviewCard';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';

const ReviewsList = () => {
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(loadReviews);
  const [deletedMessage, showDeletedMessage] = useTimedMessage();

  return isLoading ? (
    <Spinner />
  ) : reviews.length > 0 ? (
    <>
      <ul className={cl.reviewsList}>
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} showDeletedMessage={showDeletedMessage} />
        ))}
      </ul>
      {deletedMessage && <AdminMessage>{deletedMessage}</AdminMessage>}
    </>
  ) : (
    <p className={cl.notFoundText}>Нічого не знайдено. Плак плак.</p>
  );
};

export default ReviewsList;
