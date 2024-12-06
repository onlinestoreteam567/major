import { useState, useEffect } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';

const useScreenSizes = () => {
  const [screenSizes, setScreenSizes] = useState({
    tablet: false,
    deskmin: false,
    deskmax: false,
  });

  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isDeskmin = useMediaQuery('(min-width: 1024px) and (max-width: 1439px)');
  const isDeskmax = useMediaQuery('(min-width: 1440px)');

  useEffect(() => {
    setScreenSizes({
      tablet: isTablet,
      deskmin: isDeskmin,
      deskmax: isDeskmax,
    });
  }, [isTablet, isDeskmin, isDeskmax]);

  return screenSizes;
};

export default useScreenSizes;
