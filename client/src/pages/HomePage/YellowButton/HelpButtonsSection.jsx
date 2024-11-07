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
<<<<<<< HEAD:client/src/components/UI/YellowButton/HelpButtonsSection.jsx
    // eslint-disable-next-line
  }, []);
  const { t } = useTranslation();

=======
  });
  const { getTranslation } = useTranslationNamespace('yellowButton');
>>>>>>> 2e8c9df72013482de91cf292d90bceed164c2a4a:client/src/pages/HomePage/YellowButton/HelpButtonsSection.jsx
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
