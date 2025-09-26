import Spinner from '@UI/Spinner/Spinner';
import { loadReviews, selectFilteredReviews, selectRole } from '@redux/selectors';
import { useSelector } from 'react-redux';
import cl from './index.module.scss';
import ReviewListItem from './ReviewListItem/ReviewListItem';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';

const ReviewsList = () => {
  const reviews = useSelector(selectFilteredReviews);
  const isLoading = useSelector(loadReviews);
  const [message, showMessage] = useTimedMessage();

  const role = useSelector(selectRole);
  const isShowAdminSections = role === 1;

  return isLoading ? (
    <Spinner />
  ) : reviews.length > 0 ? (
    <>
      <ul className={cl.reviewsList}>
        {reviews.map((review) => (
          <ReviewListItem
            review={review}
            key={review.id}
            showMessage={showMessage}
            isShowAdminSections={isShowAdminSections}
          />
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
