import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../../redux/selectors';
import AdminNavigation from '../../../components/admin/AdminNavigation/AdminNavigation';
import cl from './index.module.scss';
import AdminGlobalMessage from './AdminGlobalMessage';

const ProtectedRoute = () => {
  const auth = useSelector(selectAccessToken);

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
