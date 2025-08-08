import Spinner from '@components/helpers/Spinner/Spinner';
import { loadReviews, selectFilteredReviews } from '@redux/selectors';
import { useSelector } from 'react-redux';
import cl from './index.module.scss';
import ReviewCard from './ReviewCard/ReviewCard';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';

const ReviewsList = () => {
  const reviews = useSelector(selectFilteredReviews);
  const isLoading = useSelector(loadReviews);
  const [message, showMessage] = useTimedMessage();

  return isLoading ? (
    <Spinner />
  ) : reviews.length > 0 ? (
    <>
      <ul className={cl.reviewsList}>
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} showMessage={showMessage} />
        ))}
      </ul>
      {message && <AdminMessage>{message}</AdminMessage>}
    </>
  ) : (
    <p className={cl.notFoundMessage}>
      За вашими критеріями пошуку нічого не знайдено. <br />
      Спробуйте ще раз.
    </p>
  );
};

export default ReviewsList;
