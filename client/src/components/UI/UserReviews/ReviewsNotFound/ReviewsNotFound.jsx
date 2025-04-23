import LeaveFeedback from '@components/UI/CardProduct/Review/LeaveFeedback';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const ReviewsNotFound = ({ card }) => {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={cl.reviewsNotFound}>
      <p>{getTranslation('reviewsNotFound')}</p>
      <LeaveFeedback card={card} />
    </div>
  );
};
export default ReviewsNotFound;
