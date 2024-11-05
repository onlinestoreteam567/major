import cl from './index.module.scss';
import LogoIcon from '@assets/svg/header/LogoIcon';
import SearchInput from '@components/Header/SearchInput/SearchInput';
import { useState, useEffect } from 'react';
import Basket from '@components/Header/Basket/Basket';
import Navigation from './Navigation';
import RightSection from './RightSection';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isShowInput, setIsShowInput] = useState(false);
  const [isShowBasket, setIsShowBasket] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMainPage, setIsMainPage] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsMainPage(false);
      setIsScrolled(true);
    } else {
      setIsMainPage(true);
      setIsScrolled(false);
    }
  }, [location]);

  const handleShowInput = () => {
    setIsShowInput(true);
  };

  const handleShowBasket = () => {
    setIsShowBasket(true);
  };

  // Check if header is scrolled
  useEffect(() => {
    if (!isMainPage) {
      return;
    }
    const handleScroll = () => {
      const scrollY = window.scrollY > 1;
      if (scrollY !== isScrolled) {
        setIsScrolled(scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled, isMainPage]);

  return (
    <header className={`${isScrolled ? cl.headerScrolled : ''} ${!isMainPage ? cl.headerNotMainPage : ''}`}>
      <div className={cl.mainWrapper}>
        <LogoIcon fillColor={isScrolled ? 'white' : 'black'} />

        {isShowInput && (
          <SearchInput setIsShowInput={setIsShowInput} inputValue={inputValue} setInputValue={setInputValue} />
        )}

        <Navigation />

        <RightSection
          isShowInput={isShowInput}
          handleShowInput={handleShowInput}
          isScrolled={isScrolled}
          handleShowBasket={handleShowBasket}
        />
      </div>

      {isShowBasket && <Basket setIsShowBasket={setIsShowBasket} />}
    </header>
  );
};

export default Header;
