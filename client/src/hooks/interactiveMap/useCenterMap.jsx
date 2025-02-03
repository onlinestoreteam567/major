import { useEffect, useState } from 'react';
import useScreenSizes from '@hooks/useScreenSizes';

const useCenterMap = (containerRef) => {
  const [centerMapValue, setCenterMapValue] = useState({
    x: 3.5,
    y: 2.4,
  });
  const { deskmax, deskmin } = useScreenSizes();

  useEffect(() => {
    if (deskmin) {
      setCenterMapValue({
        x: 10,
        y: 2.4,
      });
    }

    if (deskmax) {
      setCenterMapValue({
        x: 2.1,
        y: 2.7,
      });
    }
  }, [deskmin, deskmax]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollToY = container.scrollHeight / centerMapValue.y - container.clientHeight / 2;
        const scrollToX = container.scrollWidth / centerMapValue.x - container.clientWidth / 2;
        container.scrollTop = scrollToY;
        container.scrollLeft = scrollToX;
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [containerRef, centerMapValue]);
};

export default useCenterMap;
