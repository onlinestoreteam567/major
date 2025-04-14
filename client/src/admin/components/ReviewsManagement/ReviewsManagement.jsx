import ProductSelect from './ProductSelect/ProductSelect';
import ReviewsList from './ReviewsList/ReviewsList';
import ReviewsSelect from './ReviewsSelect/ReviewsSelect';

const ReviewsManagement = () => {
  return (
    <div>
      <ProductSelect />
      <ReviewsSelect />
      <ReviewsList />
    </div>
  );
};
export default ReviewsManagement;
