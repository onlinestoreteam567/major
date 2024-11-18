import { useState } from 'react';
import cl from './index.module.scss';
import SearchIcon from '@assets/svg/header/SearchIcon';
import UaIcon from '@assets/svg/header/UaIcon';
import BagIcon from '@assets/svg/header/BagIcon';
import EnIcon from '@assets/svg/header/EnIcon';
import useScreenSizes from '@hooks/useScreenSizes';

const RightSection = ({ handleShowInput, isScrolled, handleShowBasket }) => {
  const { deskmin } = useScreenSizes();
  const [isLanguageDefault, setIsLanguageDefault] = useState(true);

  return (
    <section className={cl.rightSection}>
      <i onClick={handleShowInput}>
        <SearchIcon fillColor={isScrolled ? '#FFFFFF' : '#292D32'} />
      </i>

      <i>
        {deskmin &&
          (isLanguageDefault ? (
            <UaIcon fillColor={isScrolled ? '#FFFFFF' : '#1C1C1C'} setIsLanguageDefault={setIsLanguageDefault} />
          ) : (
            <EnIcon fillColor={isScrolled ? '#FFFFFF' : '#1C1C1C'} setIsLanguageDefault={setIsLanguageDefault} />
          ))}
      </i>

      <i onClick={handleShowBasket}>
        <BagIcon fillColor={isScrolled ? '#FFFFFF' : '#292D32'} />
      </i>
    </section>
  );
};
export default RightSection;
