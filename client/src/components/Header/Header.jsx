import cl from './index.module.scss';
import LogoIcon from '@assets/svg/Header/LogoIcon/LogoIcon';
import HeaderNavigation from '@components/Header/HeaderNavigation/HeaderNavigation';
import useScreenSizes from '@hooks/useScreenSizes';
import { useState } from 'react';
import { usePageState } from '@hooks/header/usePageState';
import { useScrollState } from '@hooks/header/useScrollState';
import BurgerIcon from '@assets/svg/Header/BurgerIcon';
import NavDrawer from './NavDrawer/NavDrawer';
import HeaderCart from '@components/Header/HeaderCart/HeaderCart';
import HeaderRightControls from './HeaderRightControls/HeaderRightControls';
import HeaderSearch from './HeaderSearch/HeaderSearch';

const Header = ({ scrolled }) => {
  const { deskmin, deskmax } = useScreenSizes();
  const isMainPage = usePageState();
  const isScrolled = useScrollState(isMainPage || scrolled);
  const [isShowInput, setIsShowInput] = useState(false);
  const [isShowBasket, setIsShowBasket] = useState(false);
  const [isShowNavDrawer, setIsShowNavDrawer] = useState(false);

  const handleShowInput = () => setIsShowInput(true);
  const handleShowNavDrawer = () => setIsShowNavDrawer(true);
  const handleShowBasket = () => setIsShowBasket(true);

  return (
    <header className={`${cl.header} ${isScrolled ? cl.headerScrolled : ''}`}>
      <div className={cl.mainWrapper}>
        {!deskmin && !deskmax && (
          <div className={cl.burgerWrapper}>
            <BurgerIcon onClick={handleShowNavDrawer} fillColor={isScrolled ? 'white' : 'black'} />
          </div>
        )}

        <LogoIcon fillColor={isScrolled ? 'white' : 'black'} />

        {(deskmin || deskmax) && <HeaderNavigation />}

        {isShowInput && <HeaderSearch setIsShowInput={setIsShowInput} />}

        <HeaderRightControls
          handleShowInput={handleShowInput}
          isScrolled={isScrolled}
          handleShowBasket={handleShowBasket}
        />
      </div>

      {isShowNavDrawer && <NavDrawer setIsShowNavDrawer={setIsShowNavDrawer} />}
      {isShowBasket && <HeaderCart setIsShowBasket={setIsShowBasket} />}
    </header>
  );
};

export default Header;
