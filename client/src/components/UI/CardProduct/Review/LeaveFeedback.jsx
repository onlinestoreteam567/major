import { useState } from 'react';
import cl from './index.module.scss';
import ReviewPopUp from '@components/UI/PopUp/ReviewPopUp';

export default function LeaveFeedback() {
  const [showMessagePopUp, setShowMessagePopUp] = useState(false);
  const handleShowMesssagePopUp = () => {
    setShowMessagePopUp(true);
  };
  return (
    <>
      <div className={cl.wrapFeedback}>
        <p onClick={handleShowMesssagePopUp}>Залишити відгук</p>
      </div>
      {showMessagePopUp && <ReviewPopUp setShowMessagePopUp={setShowMessagePopUp} type={'leaveComment'} />}
    </>
  );
}
