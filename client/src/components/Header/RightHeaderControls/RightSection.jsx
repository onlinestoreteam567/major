import { useState } from 'react';
import cl from './index.module.scss';
import SearchIcon from '@assets/svg/Header/SearchIcon';
import UaIcon from '@assets/svg/Header/UaIcon';
import BagIcon from '@assets/svg/Header/BagIcon';
import EnIcon from '@assets/svg/Header/EnIcon';
import useScreenSizes from '@hooks/useScreenSizes';
import { useSelector } from 'react-redux';
import ButtonAriaLabel from '@components/UI/Button/ButtonAriaLabel/ButtonAriaLabel';

const RightHeaderControls = ({ handleShowInput, isScrolled, handleShowBasket }) => {
  const { deskmin, deskmax } = useScreenSizes();
  const [isLanguageDefault, setIsLanguageDefault] = useState(true);
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className={cl.rightSection}>
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
        <span>{cartItems.length}</span>
      </ButtonAriaLabel>
    </div>
  );
};
export default RightHeaderControls;
