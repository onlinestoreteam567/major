import { useState } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import Heading from '@components/UI/Texts/Heading/Heading';
import ButtonAriaLabel from '@components/UI/Button/ButtonAriaLabel';
import QuestionPopUp from './QuestionPopUp/QuestionPopUp';

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
        <ButtonAriaLabel al="openHelpInfo" onClick={showAdditionalInfo} onMouseEnter={showAdditionalInfo}>
          ?
        </ButtonAriaLabel>

        {isShowAdditionalInfo && (
          <div
            className={`${cl.additionalInfoWrapper} ${isShowAdditionalInfoCloseAnimation ? cl.closeAnimation : ''}`}
            onMouseLeave={closeAdditionalInfo}
            onClick={closeAdditionalInfo}
          >
            <span className={cl.questionSpan}>?</span>
            <div className={cl.buttonsWrapper}>
              <Heading type="h3">{getTranslation('title')}</Heading>
              <a
                href="https://t.me/UA_National_Police"
                rel="nofollow"
                target="_blank"
                aria-label={getTranslation('openTelegram')}
              >
                <img src="/svg/yellowCircle/telegram.svg" alt="Telegram icon" />
              </a>
              <ButtonAriaLabel al="openMessageForm" onClick={handleShowMesssagePopUp}>
                <img src="/svg/yellowCircle/communication.svg" alt="Open message pop-up" />
              </ButtonAriaLabel>
            </div>
          </div>
        )}
      </section>
      {showMessagePopUp && <QuestionPopUp setShowMessagePopUp={setShowMessagePopUp} />}
    </>
  );
};

export default YellowButton;
