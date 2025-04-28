import { useState } from 'react';
import cl from './index.module.scss';
import { createPortal } from 'react-dom';
import ReviewPopUp from '@components/UI/PopUp/FormPopUp/ReviewPopUp';
import WrapModal from '@components/UI/WrapModal/WrapModal';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@components/UI/Texts/Heading/Heading';

export default function LeaveReview({ card }) {
  const [isShow, setIsShow] = useState(false);

  const openModal = () => setIsShow(true);
  const closeModal = () => setIsShow(false);

  const { getTranslation } = useTranslationNamespace('common');
  return (
    <>
      <div className={cl.leaveReview}>
        <button type="button" onClick={openModal}>
          <Heading type="h3">{getTranslation('leaveAReview')}</Heading>
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
