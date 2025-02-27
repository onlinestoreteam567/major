import { useState } from 'react';
import cl from './index.module.scss';
import SearchIcon from '@assets/svg/Header/SearchIcon';
import UaIcon from '@assets/svg/Header/UaIcon';
import BagIcon from '@assets/svg/Header/BagIcon';
import EnIcon from '@assets/svg/Header/EnIcon';
import useScreenSizes from '@hooks/useScreenSizes';
import { useSelector } from 'react-redux';

const RightHeaderControls = ({ handleShowInput, isScrolled, handleShowBasket }) => {
  const { deskmin, deskmax } = useScreenSizes();
  const [isLanguageDefault, setIsLanguageDefault] = useState(true);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems.length);
  return (
    <div className={cl.rightSection}>
      <i onClick={handleShowInput}>
        <SearchIcon fillColor={isScrolled ? '#FFFFFF' : '#292D32'} />
      </i>

      <i className={cl.languageButtons}>
        {(deskmin || deskmax) &&
          (isLanguageDefault ? (
            <UaIcon fillColor={isScrolled ? '#FFFFFF' : '#1C1C1C'} setIsLanguageDefault={setIsLanguageDefault} />
          ) : (
            <EnIcon fillColor={isScrolled ? '#FFFFFF' : '#1C1C1C'} setIsLanguageDefault={setIsLanguageDefault} />
          ))}
      </i>

      <i onClick={handleShowBasket}>
        <BagIcon fillColor={isScrolled ? '#FFFFFF' : '#292D32'} />
        <span>{cartItems.length}</span>
      </i>
    </div>
  );
};
export default RightHeaderControls;
