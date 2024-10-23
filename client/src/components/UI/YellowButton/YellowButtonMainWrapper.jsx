import { useState } from 'react';
import cl from './index.module.scss';
import MessagePopUp from './MessagePopUp';
import HelpButtonsSection from './HelpButtonsSection';
import CommunicationButtons from './CommunicationButtons';

const YellowButtonMainWrapper = () => {
  const [showAnotherIcons, setShowAnotherIcons] = useState(false);
  const [showMessagePopUp, setShowMessagePopUp] = useState(false);
  const [handleCloseAnimation, setHandleCloseAnimation] = useState(false);

  const handleShowAnotherIcons = () => {
    if (showAnotherIcons === false) {
      setShowAnotherIcons(true);
    } else {
      setHandleCloseAnimation(true);
      clearTimeout();
      setTimeout(() => {
        setShowAnotherIcons(false);
        setHandleCloseAnimation(false);
      }, 275);
    }
  };

  const handleShowMesssagePopUp = () => {
    setShowMessagePopUp(true);
  };

  return (
    <>
      <div className={cl.yellowButtonWrapper}>
        <HelpButtonsSection handleShowAnotherIcons={handleShowAnotherIcons} />

        {showAnotherIcons && (
          <CommunicationButtons
            handleCloseAnimation={handleCloseAnimation}
            handleShowMesssagePopUp={handleShowMesssagePopUp}
          />
        )}
      </div>
      {showMessagePopUp && <MessagePopUp setShowMessagePopUp={setShowMessagePopUp} />}
    </>
  );
};
export default YellowButtonMainWrapper;
