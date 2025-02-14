import { useState } from 'react';
import cl from './index.module.scss';
import MainPopUp from '@UI/PopUp/MainPopUp/MainPopUp';
import NeedHelp from './NeedHelp/NeedHelp';
import { popUpData } from '@components/constants/popUpData';

const YellowButtonMainWrapper = () => {
  const [showMessagePopUp, setShowMessagePopUp] = useState(false);

  return (
    <>
      <section className={cl.yellowButtonWrapper}>
        <NeedHelp setShowMessagePopUp={setShowMessagePopUp} />
      </section>
      {showMessagePopUp && <MainPopUp setShowMessagePopUp={setShowMessagePopUp} popUpData={popUpData} />}
    </>
  );
};
export default YellowButtonMainWrapper;

// onMouseEnter={() => setShowPopup(true)}
// onMouseLeave={() => setShowPopup(false)}
