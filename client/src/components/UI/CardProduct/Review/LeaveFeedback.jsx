import { useState } from 'react';
import cl from './index.module.scss';
import { createPortal } from 'react-dom';
import ReviewPopUp from '@components/UI/PopUp/FormPopUp/ReviewPopUp';
import WrapModal from '@components/UI/WrapModal/WrapModal';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function LeaveFeedback({ card }) {
  // console.log(card);
  const [isShow, setIsShow] = useState(false);

  const openModal = () => {
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
          <WrapModal isShow={isShow} closeModal={closeModal} content={<ReviewPopUp card={card} />} />,
          document.body
        )}
    </>
  );
}
