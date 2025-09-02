import { useState } from 'react';
import cl from './index.module.scss';
import SearchIcon from '@assets/svg/Header/SearchIcon';
import UaIcon from '@assets/svg/Header/UaIcon';
import BagIcon from '@assets/svg/Header/BagIcon';
import EnIcon from '@assets/svg/Header/EnIcon';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import { useSelector } from 'react-redux';
import ButtonAriaLabel from '@components/UI/Button/ButtonAriaLabel';

const HeaderRightControls = ({ handleShowInput, isScrolled, handleShowBasket }) => {
  const cartItemsAmount = useSelector((state) => state.cart.savedIds.length);
  const { deskmin, deskmax } = useScreenSizes();
  const [isLanguageDefault, setIsLanguageDefault] = useState(true);

  return (
    <div className={cl.headerRightControls}>
      <ButtonAriaLabel al="openSearchInput" onClick={handleShowInput}>
        <SearchIcon fillColor={isScrolled ? '#FFFFFF' : '#292D32'} />
      </ButtonAriaLabel>

      <i className={cl.languageButtons}>
        {(deskmin || deskmax) &&
          (isLanguageDefault ? (
            <UaIcon fillColor={isScrolled ? '#FFFFFF' : '#1C1C1C'} setIsLanguageDefault={setIsLanguageDefault} />
          ) : (
            <EnIcon fillColor={isScrolled ? '#FFFFFF' : '#1C1C1C'} setIsLanguageDefault={setIsLanguageDefault} />
          ))}
      </i>

      <ButtonAriaLabel al="openBasket" onClick={handleShowBasket}>
        <BagIcon fillColor={isScrolled ? '#FFFFFF' : '#292D32'} />
        <span>{cartItemsAmount}</span>
      </ButtonAriaLabel>
    </div>
  );
};
export default HeaderRightControls;
