import ReviewsList from './ReviewsList/ReviewsList';
import ReviewsSelect from './ReviewsSelect/ReviewsSelect';
import cl from './index.module.scss';
import { selectReviews } from '@redux/selectors';
import { useSelector } from 'react-redux';
import Search from '../ProductManagement/Search/Search';
const ReviewsManagement = () => {
  const reviews = useSelector(selectReviews);

  return (
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
