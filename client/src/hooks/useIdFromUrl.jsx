import { useLocation } from 'react-router-dom';

const useIdFromUrl = () => {
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  return id;
};

export default useIdFromUrl;
