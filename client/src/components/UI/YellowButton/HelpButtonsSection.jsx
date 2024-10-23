import { useState } from 'react';
import cl from './index.module.scss';

const HelpButtonsSection = ({ handleShowAnotherIcons }) => {
  const [showNeedHelpButton, setShowNeedHelpButton] = useState(false);

  const showNeedHelpButtonFnc = () => {
    setShowNeedHelpButton(true);
  };

  return (
    <section className={cl.buttonsSection}>
      <button className={cl.questionButton} onMouseEnter={showNeedHelpButtonFnc}>
        ?
      </button>

      {showNeedHelpButton && (
        <button className={cl.needHelpButton} onClick={handleShowAnotherIcons}>
          Потрібна допомога?
          <div className={cl.triangle}></div>
        </button>
      )}
    </section>
  );
};
export default HelpButtonsSection;
