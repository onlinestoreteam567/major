import { useState } from 'react';
import cl from './index.module.scss';
import SearchIcon from '@assets/svg/header/SearchIcon';
import UaIcon from '@assets/svg/header/UaIcon';
import BagIcon from '@assets/svg/header/BagIcon';
import EnIcon from '@assets/svg/header/EnIcon';
import useMediaQuery from '@hooks/useMediaQuery';
import Burger from '@assets/svg/header/BurgerIcon';

const RightSection = ({ handleShowInput, isScrolled, handleShowBasket }) => {
  const [isLanguageDefault, setIsLanguageDefault] = useState(true);
  const isDesktop = useMediaQuery('(max-width: 1024px)');

  return (
    <section className={cl.rightSection}>
      {isDesktop ? (
        <i>
          <Burger fillColor={isScrolled ? '#FFFFFF' : '#292D32'} />
        </i>
      ) : (
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
  );
};
export default RightSection;
