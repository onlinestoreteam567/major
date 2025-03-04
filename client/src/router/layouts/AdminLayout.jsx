import AdminLoginPage from '../../admin/components/AdminLoginPage/AdminLoginPage';
import { selectAccessToken } from '../../admin/redux/selectors';
import { useSelector } from 'react-redux';

const AdminLayout = () => {
  const auth = useSelector(selectAccessToken);
  console.log(auth);

  return <>{auth ? <p>AUTORIZED</p> : <AdminLoginPage />}</>;
};

export default AdminLayout;
