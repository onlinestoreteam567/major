import cl from './index.module.scss';
import LogoIcon from '../../assets/svg/header/LogoIcon';
import SearchIcon from '../../assets/svg/header/SearchIcon';
import UaIcon from '../../assets/svg/header/UaIcon';
import BagIcon from '../../assets/svg/header/BagIcon';
import SearchInput from '../UI/SearchInput/SearchInput';
import { useState, useEffect } from 'react';
import EnIcon from '../../assets/svg/header/EnIcon';
import Basket from '../UI/Basket/Basket';
import Overlay from '../UI/Overlay/Overlay';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// TODO: add router;
// TODO: add basket design and implement products add to busket;
// TODO: implement language switcher;
// TODO: add design for search input, when there is so many products on the results;

const Header = () => {
  const [isShowInput, setIsShowInput] = useState(false);
  const [isShowBasket, setIsShowBasket] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageDefault, setIsLanguageDefault] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleShowInput = () => {
    setIsShowInput(true);
  };

  const handleCloseInput = () => {
    setIsShowInput(false);
  };
  const handleShowBasket = () => {
    setIsShowBasket(true);
  };

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

  const { t } = useTranslation();
  return (
    <header className={isScrolled ? cl.headerScrolled : ''}>
      <div className={`${cl.mainWrapper} ${isShowInput && cl.showInput}`}>
        <i>
          <LogoIcon fillColor={isScrolled ? 'white' : 'black'} />
        </i>

        {isShowInput ? (
          <>
            <Overlay handleClose={handleCloseInput} />
            <SearchInput setIsShowInput={setIsShowInput} inputValue={inputValue} setInputValue={setInputValue} />
          </>
        ) : (
          <nav>
            <ul>
              <li>{t('catalog', { ns: 'header' })}</li>
              <li>
                <Link to="about">{t('about', { ns: 'header' })}</Link>
              </li>
              <li>
                <Link to="blog">{t('blog', { ns: 'header' })}</Link>
              </li>
              <li>
                <Link to="cooperation">{t('cooperation', { ns: 'header' })}</Link>
              </li>
              <li>
                <Link to="contact">{t('contact', { ns: 'header' })}</Link>
              </li>
            </ul>
          </nav>
        )}

        <section className={cl.rightSection}>
          {!isShowInput && (
            <i onClick={handleShowInput}>
              <SearchIcon fillColor={isScrolled ? '#FFFFFF' : '#292D32'} />
            </i>
          )}

          <i>
            {isLanguageDefault ? (
              <UaIcon fillColor={isScrolled ? '#FFFFFF' : '#1C1C1C'} setIsLanguageDefault={setIsLanguageDefault} />
            ) : (
              <EnIcon fillColor={isScrolled ? '#FFFFFF' : '#1C1C1C'} setIsLanguageDefault={setIsLanguageDefault} />
            )}
          </i>
          <i onClick={handleShowBasket}>
            <BagIcon fillColor={isScrolled ? '#FFFFFF' : '#292D32'} />
          </i>
        </section>
      </div>

      {isShowBasket && <Basket setIsShowBasket={setIsShowBasket} />}
    </header>
  );
};

export default Header;
