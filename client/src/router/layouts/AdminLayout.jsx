import ProductForm from '../../admin/components/ProductForm/ProductForm';
import AdminLoginPage from '../../admin/components/AdminLoginPage/AdminLoginPage';
import { selectAccessToken } from '../../admin/redux/selectors';
import { useSelector } from 'react-redux';

const AdminLayout = () => {
  const auth = useSelector(selectAccessToken);
  console.log(auth);

  return <>{auth ? <ProductForm /> : <AdminLoginPage />}</>;
};

export default AdminLayout;
