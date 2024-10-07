import { useState } from "react";
import messageBotIcon from "../../../assets/svg/messageBot/messageBot.svg";
import telegramIcon from "../../../assets/svg/messageBot/telegram.svg";
import messageIcon from "../../../assets/svg/messageBot/message.svg";
import cl from "./index.module.scss";
import MessagePopUp from "./MessagePopUp";

const MessageBot = () => {
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
      <div className={cl.mainMessageBotWrapper}>
        <img onClick={handleShowAnotherIcons} src={messageBotIcon} alt="" />

        {showAnotherIcons && (
          <div className={cl.daughterIcons}>
            <section className={cl.telegramIconSection}>
              <img src={telegramIcon} alt="" />
            </section>
            <section className={cl.messageIconSection}>
              <img src={messageIcon} alt="" onClick={handleShowMesssagePopUp} />
            </section>
          </div>
        )}
      </div>
      {showMessagePopUp && (
        <MessagePopUp setShowMessagePopUp={setShowMessagePopUp}></MessagePopUp>
      )}
    </>
  );
};
export default MessageBot;
