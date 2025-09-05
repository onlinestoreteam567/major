import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  errorVerifyToken,
  loadVerifyToken,
  selectAccessToken,
  selectRefreshToken,
  selectVerifyToken,
} from '../../../redux/selectors';
import AdminNavigation from '../../../components/admin/AdminNavigation/AdminNavigation';
import cl from './index.module.scss';
import AdminGlobalMessage from './AdminGlobalMessage';
import { useEffect } from 'react';
import { verifyAuthToken } from '@redux/admin/auth/service';
import AppLoader from '@router/AppLoader/AppLoader';

const ProtectedRoute = () => {
  const auth = useSelector(selectAccessToken);
  const refresh = useSelector(selectRefreshToken);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const verify = useSelector(selectVerifyToken);
  const loadVerify = useSelector(loadVerifyToken);
  const errorVerify = useSelector(errorVerifyToken);

  useEffect(() => {
    dispatch(verifyAuthToken({ token: refresh }));
  }, [dispatch, refresh]);

  useEffect(() => {
    if (location.pathname === '/admin') {
      navigate('/admin/products');
    }
  }, [location]);

  if (loadVerify === null) {
    return;
  }

  if (loadVerify) {
    return <AppLoader />;
  }

  return verify && auth && !errorVerify ? (
    <div className={cl.adminLayout}>
      <AdminNavigation />
      <Outlet />
      <AdminGlobalMessage />
    </div>
  ) : (
    <>
      <Navigate to="/admin/login" replace />
    </>
  );
};

export default ProtectedRoute;
