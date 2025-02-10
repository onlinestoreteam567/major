import { useState } from 'react';
import cl from './index.module.scss';
import { createPortal } from 'react-dom';
import ReviewPopUp from '@components/UI/PopUp/ReviewPopUp/ReviewPopUp';
import WrapModal from '@components/UI/WrapModal/WrapModal';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function LeaveFeedback({ card }) {
  const [isShow, setIsShow] = useState(false);

  const openModal = () => {
    console.log('Hello');
    setIsShow(true);
  };
  const closeModal = () => {
    setIsShow(false);
  };

  const { getTranslation } = useTranslationNamespace('common');
  return (
    <>
      <div className={cl.wrapFeedback}>
        <button type="button" onClick={openModal}>
          {getTranslation('leaveAReview')}
        </button>
      </div>
      {isShow &&
        createPortal(
          <WrapModal closeModal={closeModal} isShow={isShow} content={<ReviewPopUp card={card} />} />,
          document.body
        )}
    </>
  );
}
