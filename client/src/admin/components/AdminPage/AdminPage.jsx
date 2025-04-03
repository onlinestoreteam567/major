import { NavLink } from 'react-router-dom';

const AdminPage = () => {
  return (
    <nav style={{ color: 'black' }}>
      <NavLink to={`/admin/products`}>Товари</NavLink>
      <NavLink to={`/admin/categories`}>Категорії</NavLink>
      <NavLink to={`/admin/promocodes`}>Промокоди</NavLink>
      <NavLink to={`/admin/banners`}>Банери</NavLink>
    </nav>
  );
};
export default AdminPage;
