import { useState } from 'react';
import cl from './index.module.scss';
import MainPopUp from '@UI/PopUp/MainPopUp/MainPopUp';
import { popUpData } from '@components/constants/popUpData';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
// import { createPortal } from 'react-dom';
// import WrapModal from '@components/UI/WrapModal/WrapModal';
// import HelperPopUp from '@components/UI/PopUp/FormPopUp/HelperPopUp';

const YellowButton = () => {
  const [showMessagePopUp, setShowMessagePopUp] = useState(false);

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

  // **********************************
  // const [isShow, setIsShow] = useState(false);

  // const openModal = () => {
  //   setIsShow(true);
  // };
  // const closeModal = () => {
  //   setIsShow(false);
  // };
  // **************************************

  const { getTranslation } = useTranslationNamespace('yellowButton');

  return (
    <>
      <section className={cl.yellowButtonWrapper}>
        <button className={cl.questionButton} onClick={showNeedHelpButtonFnc} onMouseEnter={showNeedHelpButtonFnc}>
          ?
        </button>

        {showNeedHelpButton && (
          <div
            className={`${cl.needHelpButtonsWrapper} ${showHelpButtonCloseAnimation ? cl.closeAnimation : ''}`}
            onMouseLeave={closeHelpButtonAnimation}
            onClick={closeHelpButtonAnimation}
          >
            <span className={cl.questionSpan}>?</span>
            <div className={cl.needHelpButtons}>
              <p>{getTranslation('help')}</p>
              <a href="https://example.com">
                <img src="/svg/yellowCircle/telegram.svg" alt="Telegram icon" />
              </a>
              <button onClick={handleShowMesssagePopUp}>
                <img src="/svg/yellowCircle/communication.svg" alt="Open message pop-up" />
              </button>
              {/* <button type="button" onClick={openModal}>
                <img src="/svg/yellowCircle/communication.svg" alt="Open message pop-up" />
              </button> */}
            </div>
          </div>
        )}
      </section>
      {showMessagePopUp && <MainPopUp setShowMessagePopUp={setShowMessagePopUp} popUpData={popUpData} />}
      {/* {isShow &&
        createPortal(<WrapModal isShow={isShow} closeModal={closeModal} content={<HelperPopUp />} />, document.body)} */}
    </>
  );
};
export default YellowButton;
