import { useState } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import CommunicationButtons from './CommunicationButtons/CommunicationButtons';

const NeedHelp = ({ setShowMessagePopUp }) => {
  const [showHelpButtonCloseAnimation, setShowHelpButtonCloseAnimation] = useState(false);
  const [showNeedHelpButton, setShowNeedHelpButton] = useState(false);

  const showNeedHelpButtonFnc = () => setShowNeedHelpButton(true);
  const handleShowMesssagePopUp = () => setShowMessagePopUp(true);

  const closeHelpButtonAnimation = () => {
    setShowHelpButtonCloseAnimation(true);
    clearTimeout();
    setTimeout(() => {
      setShowHelpButtonCloseAnimation(false);
      setShowNeedHelpButton(false);
    }, 275);
  };

  // Show "Потрібна допомога?" button after 40-50 seconds after page load and close it after 3 seconds
  // useEffect(() => {
  //   const randomShowDelay = Math.floor(Math.random() * 10000);
  //   const showTimer = setTimeout(() => {
  //     // showNeedHelpButtonFnc();
  //     const hideTimer = setTimeout(() => {
  //       // closeHelpButtonAnimation();
  //     }, 3000);
  //     return () => clearTimeout(hideTimer);
  //   }, randomShowDelay);
  //   return () => clearTimeout(showTimer);
  // });

  const { getTranslation } = useTranslationNamespace('yellowButton');

  return (
    <section className={cl.buttonsSection}>
      <button className={cl.questionButton} onClick={showNeedHelpButtonFnc} onMouseEnter={showNeedHelpButtonFnc}>
        ?
      </button>

      {showNeedHelpButton && (
        <div
          className={`${cl.needHelpButtonsWrapper} ${showHelpButtonCloseAnimation ? cl.closeAnimation : ''}`}
          onMouseLeave={closeHelpButtonAnimation}
          onClick={closeHelpButtonAnimation}
        >
          <button className={cl.questionButton}>?</button>
          <div className={cl.needHelpButtons} onClick={closeHelpButtonAnimation}>
            {getTranslation('help')}
            <CommunicationButtons handleShowMesssagePopUp={handleShowMesssagePopUp} />
          </div>
        </div>
      )}
    </section>
  );
};
export default NeedHelp;
