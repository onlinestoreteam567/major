import { useState } from 'react';
import cl from './index.module.scss';
import SearchInput from './SearchInput/SearchInput';

const MobileSearchWrapper = ({ setIsShowInput, inputValue, setInputValue, isDesktop }) => {
  const [IsHiddenSearchAnimation, setIsHiddenSearchAnimation] = useState(false);

  const handleCloseSearchAnimation = () => {
    setIsHiddenSearchAnimation(true);
    clearTimeout();
    setTimeout(() => {
      setIsShowInput(false);
    }, 275);
  };

  return (
    <section className={`${cl.searchWrapper} ${IsHiddenSearchAnimation && cl.closeAnimation}`}>
      <section className={cl.topSection}>
        <img src="/svg/header/searchLogo.svg" alt="" />
        <div>
          <img src="/svg/crossIcon.svg" alt="" onClick={handleCloseSearchAnimation} />
        </div>
      </section>
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} isDesktop={isDesktop} />
    </section>
  );
};
export default MobileSearchWrapper;
