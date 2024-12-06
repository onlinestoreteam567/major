import LogoIcon from '@assets/svg/header/LogoIcon/LogoIcon';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import cl from './index.module.scss';
import Button from '@UI/Button/Button';
import SocialLinks from '@UI/SocialLinks/SocialLinks';
import { useState } from 'react';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { Link } from 'react-router-dom';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';

const NavDrawer = ({ setIsShowNavDrawer }) => {
  const [hiddenNavDrawer, setHiddenNavDrawer] = useState(false);

  const handleCloseNavDrawer = () => {
    handleCloseWithDelay(setHiddenNavDrawer, setIsShowNavDrawer);
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
        <Link to="catalog">
          <Button variant="navDrawer" onClick={handleCloseNavDrawer}>
            {getTranslation('catalog')}
          </Button>
        </Link>
        <Link to="about">
          <Button variant="navDrawer" onClick={handleCloseNavDrawer}>
            {getTranslation('about')}
          </Button>
        </Link>
        <Link to="blog">
          <Button variant="navDrawer" onClick={handleCloseNavDrawer}>
            {getTranslation('blog')}
          </Button>
        </Link>
        <Link to="cooperation">
          <Button variant="navDrawer" onClick={handleCloseNavDrawer}>
            {getTranslation('cooperation')}
          </Button>
        </Link>
      </section>
      <SocialLinks />
    </section>
  );
};
export default NavDrawer;
