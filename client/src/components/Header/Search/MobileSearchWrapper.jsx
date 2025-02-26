import { useState } from 'react';
import cl from './index.module.scss';
import SearchInput from './SearchInput/SearchInput';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';

const MobileSearchWrapper = ({ setIsShowInput, isDesktop }) => {
  const [IsHiddenSearchAnimation, setIsHiddenSearchAnimation] = useState(false);

  return (
    <div className={`${cl.searchWrapper} ${IsHiddenSearchAnimation && cl.closeAnimation}`}>
      <div className={cl.top}>
        <img src="/svg/header/searchLogo.svg" alt="" />
        <ButtonClose onClick={() => handleCloseWithDelay(setIsHiddenSearchAnimation, setIsShowInput)} />
      </div>
      <SearchInput isDesktop={isDesktop} setIsShowInput={setIsShowInput} />
    </div>
  );
};
export default MobileSearchWrapper;
