import { useState } from 'react';
import cl from './index.module.scss';
import SearchInput from './SearchInput/SearchInput';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import Overlay from '@components/UI/Overlay/Overlay';

const MobileSearchWrapper = ({ setIsShowInput, isDesktop }) => {
  const [IsHiddenSearchAnimation, setIsHiddenSearchAnimation] = useState(false);

  const closeAnimation = () => {
    handleCloseWithDelay(setIsHiddenSearchAnimation, setIsShowInput);
  };

  return (
    <>
      <Overlay handleClose={closeAnimation} />
      <div className={`${cl.searchWrapper} ${IsHiddenSearchAnimation && cl.closeAnimation}`}>
        <div className={cl.top}>
          <img src="/svg/header/searchLogo.svg" alt="" />
          <ButtonClose onClick={() => closeAnimation()} ariaLabel="ariaLabelMobileSearchWrapper" />
        </div>
        <SearchInput isDesktop={isDesktop} setIsShowInput={setIsShowInput} />
      </div>
    </>
  );
};
export default MobileSearchWrapper;
