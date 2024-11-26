import { useEffect } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
const HelpButtonsSection = ({
  handleShowAnotherIcons,
  closeHelpButtonAnimation,
  showHelpButtonCloseAnimation,
  setShowNeedHelpButton,
  showNeedHelpButton,
}) => {
  const showNeedHelpButtonFnc = () => {
    setShowNeedHelpButton(true);
  };

  // Show "Потрібна допомога?" button after 40-50 seconds after page load and close it after 3 seconds
  useEffect(() => {
    const randomShowDelay = Math.floor(Math.random() * 10000);
    const showTimer = setTimeout(() => {
      showNeedHelpButtonFnc();
      const hideTimer = setTimeout(() => {
        closeHelpButtonAnimation();
      }, 3000);
      return () => clearTimeout(hideTimer);
    }, randomShowDelay);
    return () => clearTimeout(showTimer);
  });
  const { getTranslation } = useTranslationNamespace('yellowButton');

  return (
    <section className={cl.buttonsSection}>
      <button className={cl.questionButton} onMouseEnter={showNeedHelpButtonFnc}>
        ?
      </button>

      {showNeedHelpButton && (
        <button
          className={`${cl.needHelpButton} ${showHelpButtonCloseAnimation ? cl.closeAnimation : ''}`}
          onClick={() => {
            handleShowAnotherIcons(), closeHelpButtonAnimation();
          }}
          onMouseLeave={closeHelpButtonAnimation}
        >
          {getTranslation('help')}
          <div className={cl.triangle}></div>
        </button>
      )}
    </section>
  );
};
export default HelpButtonsSection;
