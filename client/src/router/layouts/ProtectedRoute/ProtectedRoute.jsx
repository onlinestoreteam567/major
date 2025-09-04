import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../../redux/selectors';
import AdminNavigation from '../../../components/admin/AdminNavigation/AdminNavigation';
import cl from './index.module.scss';
import AdminGlobalMessage from './AdminGlobalMessage';
import { useEffect } from 'react';

const ProtectedRoute = () => {
  const auth = useSelector(selectAccessToken);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/admin') {
      navigate('/admin/products');
    }
  }, [location]);

  return auth ? (
    <div className={cl.adminLayout}>
      <AdminNavigation />
      <Outlet />
      <AdminGlobalMessage />
    </div>
  ) : (
    <Navigate to="/admin/login" replace />
  );
};

export default ProtectedRoute;
