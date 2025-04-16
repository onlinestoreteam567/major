import ReturnButton from '../ReturnButton/ReturnButton';
import ProductSelect from './ProductSelect/ProductSelect';
import ReviewsList from './ReviewsList/ReviewsList';
import ReviewsSelect from './ReviewsSelect/ReviewsSelect';

const ReviewsManagement = () => {
  return (
    <div>
      <div>
        <ReturnButton />;
      </div>
      <div>
        <ProductSelect />
        <ReviewsSelect />
      </div>
      <ReviewsList />
    </div>
  );
};
export default ReviewsManagement;
