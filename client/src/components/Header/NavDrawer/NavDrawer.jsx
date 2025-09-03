import LogoIcon from '@components/UI/icons/Header/LogoIcon/LogoIcon';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import cl from './index.module.scss';
import SocialLinks from '@UI/SocialLinks/SocialLinks';
import { useState } from 'react';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import Navigation from '../HeaderNavigation/HeaderNavigation';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';

const NavDrawer = ({ setIsShowNavDrawer }) => {
  const [hiddenNavDrawer, setHiddenNavDrawer] = useState(false);

  const handleCloseNavDrawer = () => handleCloseWithDelay(setHiddenNavDrawer, setIsShowNavDrawer);

  return (
    <div className={`${cl.navDrawer} ${hiddenNavDrawer ? cl.closeAnimation : ''}`}>
      <div className={cl.top}>
        <LangSwitcher />
        <LogoIcon fillColor={'black'} />
        <div>
          <ButtonClose onClick={handleCloseNavDrawer} ariaLabel="ariaLabelCloseNavDrawer" />
        </div>
      </div>
      <Navigation onClick={handleCloseNavDrawer} />
      <SocialLinks black={true} />
    </div>
  );
};
export default NavDrawer;
