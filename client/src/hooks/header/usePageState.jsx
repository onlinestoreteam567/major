import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const usePageState = () => {
  const location = useLocation();
  const [isMainPage, setIsMainPage] = useState(location.pathname === '/');

  console.log(123);

  useEffect(() => {
    setIsMainPage(location.pathname === '/');
  }, [location]);

  return isMainPage;
};
