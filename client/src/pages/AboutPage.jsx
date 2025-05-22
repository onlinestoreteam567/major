import ReviewPopUp from '@components/UI/PopUp/FormPopUp/ReviewPopUp/ReviewPopUp';
import { useState } from 'react';

const AboutPage = () => {
  const [isShow, setIsShow] = useState(false);

  const openModal = () => setIsShow(true);

  return (
    <div>
      <button onClick={openModal}>HELLO</button>
      {isShow && <ReviewPopUp />}
    </div>
  );
};

export default AboutPage;
