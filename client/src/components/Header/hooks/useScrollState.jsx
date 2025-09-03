import { useState, useEffect } from 'react';

export const useScrollState = (isMainPage) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isMainPage) {
      setIsScrolled(true);
      return;
    } else {
      setIsScrolled(false);
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > 1;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMainPage]);

  return isScrolled;
};
