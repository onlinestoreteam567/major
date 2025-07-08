import Spinner from '@components/helpers/Spinner/Spinner';
import { loadReviews, selectReviews } from '@redux/selectors';
import { useSelector } from 'react-redux';
import cl from './index.module.scss';
import ReviewCard from './ReviewCard/ReviewCard';

const ReviewsList = () => {
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(loadReviews);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={cl.list}>
          {reviews.length > 0 && reviews.map((review) => <ReviewCard review={review} key={review.id} />)}
        </ul>
      )}
    </>
  );
};
export default ReviewsList;
