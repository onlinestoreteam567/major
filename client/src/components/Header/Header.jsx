import cl from './index.module.scss';
import LogoIcon from '@assets/svg/Header/LogoIcon/LogoIcon';
import Basket from '@components/Header/Basket/Basket';
import Navigation from '@components/Header/Navigation/Navigation';
import RightHeaderControls from './RightHeaderControls/RightSection';
import useScreenSizes from '@hooks/useScreenSizes';
import { useState } from 'react';
import { usePageState } from '@hooks/header/usePageState';
import { useScrollState } from '@hooks/header/useScrollState';
import BurgerIcon from '@assets/svg/Header/BurgerIcon';
import NavDrawer from './NavDrawer/NavDrawer';
import MobileSearchWrapper from './Search/MobileSearchWrapper';
import SearchInput from './Search/SearchInput/SearchInput';

const Header = () => {
  const { deskmin, deskmax } = useScreenSizes();
  const isMainPage = usePageState();
  const isScrolled = useScrollState(isMainPage);
  const [isShowInput, setIsShowInput] = useState(false);
  const [isShowBasket, setIsShowBasket] = useState(false);
  const [isShowNavDrawer, setIsShowNavDrawer] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleShowInput = () => setIsShowInput(true);
  const handleShowNavDrawer = () => setIsShowNavDrawer(true);
  const handleShowBasket = () => setIsShowBasket(true);

  return (
    <header className={`${isScrolled ? cl.headerScrolled : ''} ${!isMainPage ? cl.headerNotMainPage : ''}`}>
      <div className={cl.mainWrapper}>
        {!deskmin && !deskmax && (
          <div onClick={handleShowNavDrawer} className={cl.burgerWrapper}>
            <BurgerIcon fillColor={isScrolled ? 'white' : 'black'} />
          </div>
        )}

        <LogoIcon fillColor={isScrolled ? 'white' : 'black'} />

        {(deskmin || deskmax) && <Navigation />}

        {(deskmin || deskmax) && isShowInput && (
          <SearchInput
            setIsShowInput={setIsShowInput}
            inputValue={inputValue}
            setInputValue={setInputValue}
            isDesktop={deskmin || deskmax}
          />
        )}

        <RightHeaderControls
          isShowInput={isShowInput}
          handleShowInput={handleShowInput}
          isScrolled={isScrolled}
          handleShowBasket={handleShowBasket}
        />
      </div>

      {!deskmin && !deskmax && isShowInput && (
        <MobileSearchWrapper
          setIsShowInput={setIsShowInput}
          inputValue={inputValue}
          setInputValue={setInputValue}
          isDesktop={deskmin}
        />
      )}

      {isShowNavDrawer && <NavDrawer setIsShowNavDrawer={setIsShowNavDrawer} />}
      {isShowBasket && <Basket setIsShowBasket={setIsShowBasket} />}
    </header>
  );
};

export default Header;
