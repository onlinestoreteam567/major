import { useState } from 'react';
import cl from './index.module.scss';
import SearchIcon from '@assets/svg/Header/SearchIcon';
import UaIcon from '@assets/svg/Header/UaIcon';
import BagIcon from '@assets/svg/Header/BagIcon';
import EnIcon from '@assets/svg/Header/EnIcon';
import useScreenSizes from '@hooks/useScreenSizes';

const RightHeaderControls = ({ handleShowInput, isScrolled, handleShowBasket }) => {
  const { deskmin, deskmax } = useScreenSizes();
  const [isLanguageDefault, setIsLanguageDefault] = useState(true);

  return (
    <div className={cl.rightSection}>
      <i onClick={handleShowInput}>
        <SearchIcon fillColor={isScrolled ? '#FFFFFF' : '#292D32'} />
      </i>

      <i>
        {(deskmin || deskmax) &&
          (isLanguageDefault ? (
            <UaIcon fillColor={isScrolled ? '#FFFFFF' : '#1C1C1C'} setIsLanguageDefault={setIsLanguageDefault} />
          ) : (
            <EnIcon fillColor={isScrolled ? '#FFFFFF' : '#1C1C1C'} setIsLanguageDefault={setIsLanguageDefault} />
          ))}
      </i>

      <i onClick={handleShowBasket}>
        <BagIcon fillColor={isScrolled ? '#FFFFFF' : '#292D32'} />
      </i>
    </div>
  );
};
export default RightHeaderControls;
