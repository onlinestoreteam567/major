import ProductSelect from '@components/admin/ProductSelect/ProductSelect';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
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
