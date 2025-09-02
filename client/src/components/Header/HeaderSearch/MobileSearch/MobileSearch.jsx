import { useState } from 'react';
import cl from './index.module.scss';
import SearchInput from '../SearchInput/SearchInput';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import Overlay from '@components/UI/Overlay/Overlay';

const MobileSearch = ({ setIsShowInput }) => {
  const [isHiddenSearchAnimation, setIsHiddenSearchAnimation] = useState(false);
  const handleCloseInput = () => handleCloseWithDelay(setIsHiddenSearchAnimation, setIsShowInput);

  return (
    <>
      <Overlay handleClose={handleCloseInput} />
      <div className={`${cl.mobileSearch} ${isHiddenSearchAnimation && cl.closeAnimation}`}>
        <div className={cl.top}>
          <img src="/svg/header/searchLogo.svg" alt="" />
          <ButtonClose onClick={() => handleCloseInput()} ariaLabel="ariaLabelMobileSearchWrapper" />
        </div>
        <SearchInput handleCloseInput={handleCloseInput} />
      </div>
    </>
  );
};
export default MobileSearch;
