import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import Overlay from '@components/UI/Overlay/Overlay';
import { useState } from 'react';
import SearchInput from './SearchInput/SearchInput';

const DesktopSearch = ({ setIsShowInput }) => {
  const [isHiddenInputAnimation, setIsHiddenInputAnimation] = useState(false);

  const handleCloseInput = () => handleCloseWithDelay(setIsHiddenInputAnimation, setIsShowInput);

  return (
    <>
      <SearchInput isHiddenInputAnimation={isHiddenInputAnimation} handleCloseInput={handleCloseInput} />
      <Overlay handleClose={handleCloseInput} />
    </>
  );
};
export default DesktopSearch;
