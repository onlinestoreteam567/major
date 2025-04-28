import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import LeaveReview from '@pages/ProductPage/Card/ProductDetails/LeaveReview/LeaveReview';

const ReviewsNotFound = ({ card }) => {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={cl.reviewsNotFound}>
      <p>{getTranslation('reviewsNotFound')}</p>
      <LeaveReview card={card} />
    </div>
  );
};
export default ReviewsNotFound;
