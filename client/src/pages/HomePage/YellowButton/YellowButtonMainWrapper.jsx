import { useState } from 'react';
import cl from './index.module.scss';
import HasQuestionPopUp from '@UI/PopUp/HasQuestionPopUp';
import HelpButtonsSection from './HelpButtonsSection';
import CommunicationButtons from './CommunicationButtons';

const YellowButtonMainWrapper = () => {
  const [showAnotherIcons, setShowAnotherIcons] = useState(false);
  const [showMessagePopUp, setShowMessagePopUp] = useState(false);
  const [handleCloseAnimation, setHandleCloseAnimation] = useState(false);
  const [showHelpButtonCloseAnimation, setShowHelpButtonCloseAnimation] = useState(false);
  const [showNeedHelpButton, setShowNeedHelpButton] = useState(false);

  const handleShowAnotherIcons = () => {
    if (showAnotherIcons === false) {
      setShowAnotherIcons(true);
    }
  };

  const handleCloseAnotherIcons = () => {
    clearTimeout();
    setTimeout(() => {
      setHandleCloseAnimation(true);
      clearTimeout();
      setTimeout(() => {
        setShowAnotherIcons(false);
        setHandleCloseAnimation(false);
      }, 275);
    }, 3000);
  };

  const handleShowMesssagePopUp = () => {
    setShowMessagePopUp(true);
  };

  const closeHelpButtonAnimation = () => {
    setShowHelpButtonCloseAnimation(true);
    clearTimeout();
    setTimeout(() => {
      setShowHelpButtonCloseAnimation(false);
      setShowNeedHelpButton(false);
    }, 275);
  };

  return (
    <>
      <section className={cl.yellowButtonWrapper}>
        <HelpButtonsSection
          handleShowAnotherIcons={handleShowAnotherIcons}
          closeHelpButtonAnimation={closeHelpButtonAnimation}
          showHelpButtonCloseAnimation={showHelpButtonCloseAnimation}
          setShowNeedHelpButton={setShowNeedHelpButton}
          showNeedHelpButton={showNeedHelpButton}
        />

        {showAnotherIcons && (
          <CommunicationButtons
            handleCloseAnimation={handleCloseAnimation}
            handleShowMesssagePopUp={handleShowMesssagePopUp}
            handleCloseAnotherIcons={handleCloseAnotherIcons}
          />
        )}
      </section>
      {showMessagePopUp && <HasQuestionPopUp setShowMessagePopUp={setShowMessagePopUp} type={'hasQuestion'} />}
    </>
  );
};
export default YellowButtonMainWrapper;
