import cl from './index.module.scss';
import telegramIcon from '../../../assets/svg/yellowCircle/telegram.svg';
import phoneIcon from '../../../assets/svg/yellowCircle/phone.svg';

const CommunicationButtons = ({ handleCloseAnimation, handleShowMesssagePopUp }) => {
  return (
    <div className={`${cl.communicationButtons} ${handleCloseAnimation ? cl.closeAnimation : ''}`}>
      <img src={telegramIcon} alt="Telegram icon" className={cl.telegramIcon} />
      <img src={phoneIcon} alt="Open message pop-up" onClick={handleShowMesssagePopUp} className={cl.phoneIcon} />
    </div>
  );
};
export default CommunicationButtons;
