import cl from './index.module.scss';
import LogoIcon from '../../assets/svg/header/LogoIcon';
import SearchInput from '../UI/SearchInput/SearchInput';
import { useState, useEffect } from 'react';
import Basket from '../UI/Basket/Basket';
import Navigation from './Navigation';
import RightSection from './RightSection';


const Header = () => {
  const [isShowInput, setIsShowInput] = useState(false);
  const [isShowBasket, setIsShowBasket] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleShowInput = () => {
    setIsShowInput(true);
  };

  const handleShowBasket = () => {
    setIsShowBasket(true);
  };

  // Check if header is scrolled
  useEffect(() => {
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
  }, [isScrolled]);

  return (
    <header className={isScrolled ? cl.headerScrolled : ''}>
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
