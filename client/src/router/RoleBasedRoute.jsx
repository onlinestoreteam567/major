// src/layouts/RoleBasedRoute/RoleBasedRoute.jsx
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectRole } from '@redux/selectors';

const RoleBasedRoute = ({ allowedRoles }) => {
  const userRole = useSelector(selectRole);

  if (allowedRoles.includes(userRole)) {
    return <Outlet />;
  } else {
    return <Navigate to="404" replace />;
  }
};

export default RoleBasedRoute;
