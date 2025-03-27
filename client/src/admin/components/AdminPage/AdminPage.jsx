import { NavLink } from 'react-router-dom';
import Demo from './Crop';

const AdminPage = () => {
  return (
    <nav style={{ color: 'black' }}>
      <NavLink to={`/admin/products`}>Товари</NavLink>
      <NavLink to={`/admin/categories`}>Категорії</NavLink>
      <NavLink to={`/admin/promocodes`}>Промокоди</NavLink>
      <Demo />
    </nav>
  );
};
export default AdminPage;
