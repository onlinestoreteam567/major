import { useLocation } from 'react-router-dom';

const useCategoryActive = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    pathname === '/admin/categories' ||
    pathname.includes('/admin/purpose-categories/') ||
    pathname.includes('/admin/type/')
  );
};

export default useCategoryActive;
