import { useEffect, useState } from 'react';
import cl from './index.module.scss';

const HelpButtonsSection = ({ handleShowAnotherIcons }) => {
  const [showNeedHelpButton, setShowNeedHelpButton] = useState(false);
  const [showHelpButtonCloseAnimation, setShowHelpButtonCloseAnimation] = useState(false);

  const showNeedHelpButtonFnc = () => {
    setShowNeedHelpButton(true);
  };

  const closeHelpButtonAnimation = () => {
    setShowHelpButtonCloseAnimation(true);
    clearTimeout();
    setTimeout(() => {
      setShowHelpButtonCloseAnimation(false);
      setShowNeedHelpButton(false);
    }, 275);
  };

  // Show "Потрібна допомога?" button after 40-50 seconds after page load and close it after 3 seconds
  useEffect(() => {
    const randomShowDelay = Math.floor(Math.random() * 10000) + 40000;
    const showTimer = setTimeout(() => {
      showNeedHelpButtonFnc();
      const hideTimer = setTimeout(() => {
        closeHelpButtonAnimation();
      }, 3000);
      return () => clearTimeout(hideTimer);
    }, randomShowDelay);
    return () => clearTimeout(showTimer);
  }, []);

  return (
    <section
      className={cl.buttonsSection}
      onMouseLeave={() => {
        closeHelpButtonAnimation();
      }}
    >
      <button className={cl.questionButton} onMouseEnter={showNeedHelpButtonFnc}>
        ?
      </button>

      {showNeedHelpButton && (
        <button
          className={`${cl.needHelpButton} ${showHelpButtonCloseAnimation ? cl.closeAnimation : ''}`}
          onClick={handleShowAnotherIcons}
        >
          Потрібна допомога?
          <div className={cl.triangle}></div>
        </button>
      )}
    </section>
  );
};
export default HelpButtonsSection;
