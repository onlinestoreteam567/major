import cl from './index.module.scss';
import LogoIcon from '@assets/svg/header/LogoIcon';
import SearchInput from '@components/Header/SearchInput/SearchInput';
import Basket from '@components/Header/Basket/Basket';
import Navigation from './Navigation';
import RightSection from './RightSection';
import useMediaQuery from '@hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import { usePageState } from '@hooks/header/usePageState';
import { useScrollState } from '@hooks/header/useScrollState';

const Header = () => {
  const isMainPage = usePageState();
  const isScrolled = useScrollState(isMainPage);
  const isDesktop = useMediaQuery('(max-width: 1024px)');
  const [isShowInput, setIsShowInput] = useState(isDesktop);
  const [isShowBasket, setIsShowBasket] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setIsShowInput(isDesktop);
  }, [isDesktop]);

  const handleShowInput = () => setIsShowInput(true);
  const handleShowBasket = () => setIsShowBasket(true);

  return (
    <header className={`${isScrolled ? cl.headerScrolled : ''} ${!isMainPage ? cl.headerNotMainPage : ''}`}>
      <div className={cl.mainWrapper}>
        <LogoIcon fillColor={isScrolled ? 'white' : 'black'} />

        {isShowInput && (
          <SearchInput
            setIsShowInput={setIsShowInput}
            inputValue={inputValue}
            setInputValue={setInputValue}
            isDesktop={isDesktop}
          />
        )}

        {!isDesktop && <Navigation />}

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
