import { useState } from 'react';
import ReviewPopUp from './ProductPage/Card/ReviewPopUp/ReviewPopUp';

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
