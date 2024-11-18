import cl from './index.module.scss';
import LogoIcon from '@assets/svg/header/LogoIcon/LogoIcon';
import Basket from '@components/Header/Basket/Basket';
import Navigation from '@components/Header/Navigation/Navigation';
import RightSection from './RightSection/RightSection';
import useScreenSizes from '@hooks/useScreenSizes';
import { useState } from 'react';
// import { useEffect, useState } from 'react';
import { usePageState } from '@hooks/header/usePageState';
import { useScrollState } from '@hooks/header/useScrollState';
import BurgerIcon from '@assets/svg/header/BurgerIcon';
import NavDrawer from './NavDrawer/NavDrawer';
import Search from './Search/Search';

const Header = () => {
  const { deskmin } = useScreenSizes();
  const isMainPage = usePageState();
  const isScrolled = useScrollState(isMainPage);
  const [isShowInput, setIsShowInput] = useState(deskmin);
  const [isShowBasket, setIsShowBasket] = useState(false);
  const [isShowNavDrawer, setIsShowNavDrawer] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleShowInput = () => setIsShowInput(true);
  const handleShowNavDrawer = () => setIsShowNavDrawer(true);
  const handleShowBasket = () => setIsShowBasket(true);

  return (
    <header className={`${isScrolled ? cl.headerScrolled : ''} ${!isMainPage ? cl.headerNotMainPage : ''}`}>
      <div className={cl.mainWrapper}>
        {!deskmin && (
          <div onClick={handleShowNavDrawer}>
            <BurgerIcon fillColor={isScrolled ? 'white' : 'black'} />
          </div>
        )}

        <LogoIcon fillColor={isScrolled ? 'white' : 'black'} />
        {/* {isShowInput && (
          <SearchInput
            setIsShowInput={setIsShowInput}
            inputValue={inputValue}
            setInputValue={setInputValue}
            isDesktop={false}
          />
        )} */}
        {deskmin && <Navigation />}
        <RightSection
          isShowInput={isShowInput}
          handleShowInput={handleShowInput}
          isScrolled={isScrolled}
          handleShowBasket={handleShowBasket}
        />
      </div>

      {isShowInput && (
        <Search
          setIsShowInput={setIsShowInput}
          inputValue={inputValue}
          setInputValue={setInputValue}
          isDesktop={false}
        />
      )}
      {isShowNavDrawer && <NavDrawer setIsShowNavDrawer={setIsShowNavDrawer} />}
      {isShowBasket && <Basket setIsShowBasket={setIsShowBasket} />}
    </header>
  );
};

export default Header;
