import { useState } from 'react';
import cl from './index.module.scss';
import ReviewPopUp from '@components/UI/PopUp/FormPopUp/ReviewPopUp/ReviewPopUp';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@components/UI/Texts/Heading/Heading';

export default function LeaveReview({ card }) {
  const [isShow, setIsShow] = useState(true);

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
      {isShow && <ReviewPopUp card={card} closeModal={closeModal} />}
    </>
  );
}
