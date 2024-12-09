import LogoIcon from '@assets/svg/header/LogoIcon/LogoIcon';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import cl from './index.module.scss';
import SocialLinks from '@UI/SocialLinks/SocialLinks';
import { useState } from 'react';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import Navigation from '../Navigation/Navigation';

const NavDrawer = ({ setIsShowNavDrawer }) => {
  const [hiddenNavDrawer, setHiddenNavDrawer] = useState(false);

  const handleCloseNavDrawer = () => {
    handleCloseWithDelay(setHiddenNavDrawer, setIsShowNavDrawer);
  };

  return (
    <section className={`${cl.navDrawer} ${hiddenNavDrawer ? cl.closeAnimation : ''}`}>
      <section className={cl.topSection}>
        <LangSwitcher />
        <LogoIcon fillColor={'black'} />
        <div>
          <img src="/svg/crossIcon.svg" alt="" onClick={handleCloseNavDrawer} />
        </div>
      </section>
      <Navigation />
      <SocialLinks black={true} />
    </section>
  );
};
export default NavDrawer;
