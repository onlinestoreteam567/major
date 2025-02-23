import { useState } from 'react';
import cl from './index.module.scss';
import MainPopUp from '@UI/PopUp/MainPopUp/MainPopUp';
import { popUpData } from '@components/constants/popUpData';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';

const YellowButton = () => {
  const [showMessagePopUp, setShowMessagePopUp] = useState(false);
  const [isShowAdditionalInfoCloseAnimation, setIsShowAdditionalInfoCloseAnimation] = useState(false);
  const [isShowAdditionalInfo, setIsShowAdditionalInfo] = useState(false);

  const showAdditionalInfo = () => setIsShowAdditionalInfo(true);
  const handleShowMesssagePopUp = () => setShowMessagePopUp(true);

  const closeAdditionalInfo = () =>
    handleCloseWithDelay(setIsShowAdditionalInfoCloseAnimation, setIsShowAdditionalInfo);

  const { getTranslation } = useTranslationNamespace('yellowButton');

  return (
    <>
      <section className={cl.yellowButtonWrapper}>
        <button className={cl.questionButton} onClick={showAdditionalInfo} onMouseEnter={showAdditionalInfo}>
          ?
        </button>

        {isShowAdditionalInfo && (
          <div
            className={`${cl.additionalInfoWrapper} ${isShowAdditionalInfoCloseAnimation ? cl.closeAnimation : ''}`}
            onMouseLeave={closeAdditionalInfo}
            onClick={closeAdditionalInfo}
          >
            <span className={cl.questionSpan}>?</span>
            <div className={cl.buttonsWrapper}>
              <p>{getTranslation('title')}</p>
              <a href="https://t.me/UA_National_Police" rel="nofollow" target="_blank">
                <img src="/svg/yellowCircle/telegram.svg" alt="Telegram icon" />
              </a>
              <button onClick={handleShowMesssagePopUp}>
                <img src="/svg/yellowCircle/communication.svg" alt="Open message pop-up" />
              </button>
            </div>
          </div>
        )}
      </section>
      {showMessagePopUp && <MainPopUp setShowMessagePopUp={setShowMessagePopUp} popUpData={popUpData} />}
    </>
  );
};

export default YellowButton;
