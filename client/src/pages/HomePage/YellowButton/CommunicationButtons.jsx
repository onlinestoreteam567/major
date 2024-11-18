import cl from './index.module.scss';

const CommunicationButtons = ({ handleCloseAnimation, handleShowMesssagePopUp, handleCloseAnotherIcons }) => {
  return (
    <div
      className={`${cl.communicationButtons} ${handleCloseAnimation ? cl.closeAnimation : ''}`}
      onMouseLeave={handleCloseAnotherIcons}
    >
      <img src="/svg/yellowCircle/telegram.svg" alt="Telegram icon" className={cl.telegramIcon} />
      <img
        src="/svg/yellowCircle/phone.svg"
        alt="Open message pop-up"
        onClick={handleShowMesssagePopUp}
        className={cl.phoneIcon}
      />
    </div>
  );
};
export default CommunicationButtons;
