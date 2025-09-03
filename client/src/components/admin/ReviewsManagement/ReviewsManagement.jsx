import ReviewsList from './ReviewsList/ReviewsList';
import ReviewsSelect from './ReviewsSelect/ReviewsSelect';
import cl from './index.module.scss';
import { selectFilteredReviews } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsSearch from './ReviewsSearch/ReviewsSearch';
import { useEffect } from 'react';
import { reviewsGetAll } from '@redux/reviews/service';
const ReviewsManagement = () => {
  const reviews = useSelector(selectFilteredReviews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reviewsGetAll());
  }, [dispatch]);

  return (
    <div className={cl.reviewsManamegent}>
      <div>
        <p>Відгуки ({reviews.length})</p>
        <ReviewsSearch />
        <ReviewsSelect />
      </div>

      <ReviewsList />
    </div>
  );
};
export default ReviewsManagement;
