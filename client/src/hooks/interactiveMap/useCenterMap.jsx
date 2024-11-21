import { useEffect, useState } from 'react';
import useScreenSizes from '@hooks/useScreenSizes';

const useCenterMap = (containerRef) => {
  const [centerMapValue, setCenterMapValue] = useState({
    x: 3.5,
    y: 2.7,
  });
  const { deskmax } = useScreenSizes();

  useEffect(() => {
    if (deskmax) {
      setCenterMapValue({
        x: 4.5,
        y: 2.7,
      });
    }
  }, [deskmax]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollToY = container.scrollHeight / centerMapValue - container.clientHeight / 2;
        const scrollToX = container.scrollWidth / centerMapValue.x - container.clientWidth / 2;
        container.scrollTop = scrollToY;
        container.scrollLeft = scrollToX;
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [containerRef, centerMapValue]);
};

export default useCenterMap;
