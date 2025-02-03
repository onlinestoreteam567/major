import cl from './index.module.scss';

const CommunicationButtons = ({ handleShowMesssagePopUp }) => {
  return (
    <div className={cl.communicationButtons}>
      <a href="https://example.com">
        <img src="/svg/yellowCircle/telegram.svg" alt="Telegram icon" />
      </a>
      <button>
        <img src="/svg/yellowCircle/communication.svg" alt="Open message pop-up" onClick={handleShowMesssagePopUp} />
      </button>
    </div>
  );
};
export default CommunicationButtons;
