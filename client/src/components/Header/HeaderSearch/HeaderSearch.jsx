import DesktopSearch from './DesktopSearch';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import MobileSearch from './MobileSearch/MobileSearch';
import { useEffect, useState } from 'react';
import { searchReducer } from '@redux/products/searchSlice';
import { injectReducers } from '@config/store';

const HeaderSearch = ({ setIsShowInput }) => {
  const { deskmin, deskmax } = useScreenSizes();
  const [isReducerLoaded, setIsReducerLoaded] = useState(false);

  const searchReducers = {
    search: searchReducer,
  };

  useEffect(() => {
    injectReducers(searchReducers);
    setIsReducerLoaded(true);
  }, []);

  if (!isReducerLoaded) return;

  if (deskmin || deskmax) {
    return <DesktopSearch setIsShowInput={setIsShowInput} />;
  }

  return <MobileSearch setIsShowInput={setIsShowInput} />;
};

export default HeaderSearch;
