import { useState } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ReviewPopUp from '@components/UI/PopUp/ReviewPopUp/ReviewPopUp';

export default function LeaveFeedback({ card }) {
  const [isShowReviewPopUp, setIsShowReviewPopUp] = useState(false);
  const { getTranslation } = useTranslationNamespace('common');

  const showReviewPopUp = () => setIsShowReviewPopUp(true);
  return (
    <>
      <div className={cl.wrapFeedback}>
        <button type="button" onClick={showReviewPopUp}>
          {getTranslation('leaveAReview')}
        </button>
      </div>
      {isShowReviewPopUp && <ReviewPopUp id={card.id} setIsShowReviewPopUp={setIsShowReviewPopUp} />}
    </>
  );
}
