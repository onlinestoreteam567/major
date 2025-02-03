import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import { useState } from 'react';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import Overlay from '@components/UI/Overlay/Overlay';

const MobileSorting = ({ setIsShowMobileSorting }) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [isHiddenMobileSorting, setisHiddenMobileSorting] = useState(false);

  const handleCloseMobileSorging = () => {
    handleCloseWithDelay(setisHiddenMobileSorting, setIsShowMobileSorting);
  };

  const handleActiveLink = (index) => setActiveLinkIndex(index);

  const links = ['за популярністю', 'спочатку дешевше', 'спочатку дорожче'];

  return (
    <>
      <Overlay handleClose={() => handleCloseMobileSorging()} />
      <ul className={`${cl.mobileSorting} ${isHiddenMobileSorting ? cl.hiddenAnimation : ''}`}>
        {links.map((text, index) => (
          <li
            key={index}
            className={`${activeLinkIndex === index ? cl.active : ''}`}
            onClick={() => handleActiveLink(index)}
          >
            <Heading type="h3">{text}</Heading>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileSorting;
