import DesktopSearch from './DesktopSearch';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import MobileSearch from './MobileSearch/MobileSearch';

const HeaderSearch = ({ setIsShowInput }) => {
  const { deskmin, deskmax } = useScreenSizes();

  if (deskmin || deskmax) {
    return <DesktopSearch setIsShowInput={setIsShowInput} />;
  }

  return <MobileSearch setIsShowInput={setIsShowInput} />;
};

export default HeaderSearch;
