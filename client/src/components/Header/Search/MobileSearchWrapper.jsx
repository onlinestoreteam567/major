import { useState } from 'react';
import cl from './index.module.scss';
import SearchInput from './SearchInput/SearchInput';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import ButtonClose from '@assets/svg/ButtonClose/ButtonClose';

const MobileSearchWrapper = ({ setIsShowInput, inputValue, setInputValue, isDesktop }) => {
  const [IsHiddenSearchAnimation, setIsHiddenSearchAnimation] = useState(false);

  return (
    <div className={`${cl.searchWrapper} ${IsHiddenSearchAnimation && cl.closeAnimation}`}>
      <div className={cl.top}>
        <img src="/svg/header/searchLogo.svg" alt="" />
        <ButtonClose
          onClick={() => {
            handleCloseWithDelay(setIsHiddenSearchAnimation, setIsShowInput);
          }}
        />
      </div>
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} isDesktop={isDesktop} />
    </div>
  );
};
export default MobileSearchWrapper;
