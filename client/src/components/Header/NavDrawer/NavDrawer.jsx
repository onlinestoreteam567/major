import LogoIcon from '@assets/svg/header/LogoIcon/LogoIcon';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import cl from './index.module.scss';
import Button from '@UI/Button/Button';
import SocialLinks from '@UI/SocialLinks/SocialLinks';
import { useState } from 'react';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const NavDrawer = ({ setIsShowNavDrawer }) => {
  const [hiddenNavDrawer, setHiddenNavDrawer] = useState(false);

  const handleCloseNavDrawer = () => {
    setHiddenNavDrawer(true);
    clearTimeout();
    setTimeout(() => {
      setIsShowNavDrawer(false);
    }, 450);
  };

  const { getTranslation } = useTranslationNamespace('footer');

  return (
    <section className={`${cl.navDrawer} ${hiddenNavDrawer ? cl.closeAnimation : ''}`}>
      <section className={cl.topSection}>
        <LangSwitcher />
        <LogoIcon fillColor={'black'} />
        <div>
          <img src="/svg/crossIcon.svg" alt="" onClick={handleCloseNavDrawer} />
        </div>
      </section>
      <section className={cl.buttonsSection}>
        <Button variant="navDrawer">{getTranslation('catalog')}</Button>
        <Button variant="navDrawer">{getTranslation('about')}</Button>
        <Button variant="navDrawer">{getTranslation('blog')}</Button>
        <Button variant="navDrawer">{getTranslation('cooperation')}</Button>
      </section>
      <SocialLinks />
    </section>
  );
};
export default NavDrawer;
