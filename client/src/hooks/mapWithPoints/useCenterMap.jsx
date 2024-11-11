import { useEffect, useState } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';

const useCenterMap = (containerRef) => {
  const [centerMapValue, setCenterMapValue] = useState({
    x: 2,
    y: 2.7,
  });
  const isDeskmin = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    if (isDeskmin) {
      setCenterMapValue({
        x: 4.5,
        y: 2.7,
      });
    }
  }, [isDeskmin]);

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
