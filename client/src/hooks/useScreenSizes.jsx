import { useState, useEffect } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';

const useScreenSizes = () => {
  const [screenSizes, setScreenSizes] = useState({
    smallMobile: false,
    mobile: false,
    tablet: false,
    deskmin: false,
    deskmax: false,
  });

  const isSmallMobile = useMediaQuery('(min-width: 320px) and (max-width: 379px)');
  const isMobile = useMediaQuery('(min-width: 380px) and (max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isDeskmin = useMediaQuery('(min-width: 1024px) and (max-width: 1439px)');
  const isDeskmax = useMediaQuery('(min-width: 1440px)');

  useEffect(() => {
    setScreenSizes({
      smallMobile: isSmallMobile,
      mobile: isMobile,
      tablet: isTablet,
      deskmin: isDeskmin,
      deskmax: isDeskmax,
    });
  }, [isSmallMobile, isMobile, isTablet, isDeskmin, isDeskmax]);

  return screenSizes;
};

export default useScreenSizes;
