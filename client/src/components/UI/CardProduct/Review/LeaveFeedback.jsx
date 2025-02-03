import { useState } from 'react';
import cl from './index.module.scss';
import { createPortal } from 'react-dom';
import ReviewPopUp from '@components/UI/PopUp/ReviewPopUp/ReviewPopUp';
import WrapModal from '@components/UI/WrapModal/WrapModal';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function LeaveFeedback() {
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
        <p onClick={openModal}>{getTranslation('leaveAReview')}</p>
      </div>
      {isShow &&
        createPortal(<WrapModal closeModal={closeModal} isShow={isShow} content={<ReviewPopUp />} />, document.body)}
    </>
  );
}
