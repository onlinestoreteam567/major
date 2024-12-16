import ReviewPopUp from '@components/UI/PopUp/ReviewPopUp/ReviewPopUp';
import WrapModal from '@components/UI/WrapModal/WrapModal';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const AboutPage = () => {
  const [isShow, setIsShow] = useState(false);

  const openModal = () => {
    setIsShow(true);
  };
  const closeModal = () => {
    setIsShow(false);
  };
  return (
    <div>
      <button onClick={openModal}>HELLO</button>
      {isShow &&
        createPortal(<WrapModal closeModal={closeModal} isShow={isShow} content={<ReviewPopUp />} />, document.body)}
    </div>
  );
};

export default AboutPage;
