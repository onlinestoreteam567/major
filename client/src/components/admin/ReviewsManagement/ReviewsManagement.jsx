import ReviewsList from './ReviewsList/ReviewsList';
import ReviewsSelect from './ReviewsSelect/ReviewsSelect';
import cl from './index.module.scss';
import { loadReviews, selectReviews } from '@redux/selectors';
import { useSelector } from 'react-redux';
import Spinner from '@components/helpers/Spinner/Spinner';
import Search from '../ProductManagement/Search/Search';
const ReviewsManagement = () => {
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(loadReviews);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={cl.reviewsManamegent}>
      <div>
        <p>Відгуки ({reviews.length})</p>
        <Search />
        <ReviewsSelect />
      </div>

      <ReviewsList />
    </div>
  );
};
export default ReviewsManagement;
