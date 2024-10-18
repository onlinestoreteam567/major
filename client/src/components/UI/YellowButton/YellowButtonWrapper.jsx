import { useState } from 'react';
import yellowCircleIcon from '../../../assets/svg/yellowCircle/yellowCircle.svg';
import telegramIcon from '../../../assets/svg/yellowCircle/telegram.svg';
import messageIcon from '../../../assets/svg/yellowCircle/message.svg';
import cl from './index.module.scss';
import MessagePopUp from './MessagePopUp';

const YellowButtonWrapper = () => {
  const [showAnotherIcons, setShowAnotherIcons] = useState(false);
  const [showMessagePopUp, setShowMessagePopUp] = useState(false);

  const handleShowAnotherIcons = () => {
    setShowAnotherIcons(!showAnotherIcons);
  };

  const handleShowMesssagePopUp = () => {
    setShowMessagePopUp(true);
  };

  return (
    <>
      <div className={cl.yellowButtonWrapper}>
        <img onClick={handleShowAnotherIcons} src={yellowCircleIcon} alt="Message bot icon" />

        {showAnotherIcons && (
          <div className={cl.daughterIcons}>
            <section className={cl.telegramIconSection}>
              <img src={telegramIcon} alt="Telegram icon" />
            </section>
            <section className={cl.messageIconSection}>
              <img src={messageIcon} alt="Open message pop-up" onClick={handleShowMesssagePopUp} />
            </section>
          </div>
        )}
      </div>
      {showMessagePopUp && <MessagePopUp setShowMessagePopUp={setShowMessagePopUp}></MessagePopUp>}
    </>
  );
};
export default YellowButtonWrapper;
