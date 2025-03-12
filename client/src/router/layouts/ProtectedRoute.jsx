import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../admin/redux/selectors';

const ProtectedRoute = () => {
  const auth = useSelector(selectAccessToken);

  return auth ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
