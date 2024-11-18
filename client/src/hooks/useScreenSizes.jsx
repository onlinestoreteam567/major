import { useState, useEffect } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';

const useScreenSizes = () => {
  const [screenSizes, setScreenSizes] = useState({
    phone: false,
    tablet: false,
    deskmin: false,
    deskmax: false,
  });

  const phone = useMediaQuery('(min-width: 380px)');
  const tablet = useMediaQuery('(min-width: 768px)');
  const deskmin = useMediaQuery('(min-width: 1024px)');
  const deskmax = useMediaQuery('(min-width: 1440px)');

  useEffect(() => {
    const handleResize = () => {
      setScreenSizes({ phone, tablet, deskmin, deskmax });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [phone, tablet, deskmin, deskmax]);

  return screenSizes;
};

export default useScreenSizes;
