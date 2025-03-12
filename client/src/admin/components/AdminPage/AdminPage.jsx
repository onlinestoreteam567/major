import { NavLink } from 'react-router-dom';

const AdminPage = () => {
  return (
    <nav style={{ color: 'black' }}>
      <NavLink to={`/admin/products`}>Товари</NavLink>
      <NavLink to={`/admin/categories`}>Категорії</NavLink>
    </nav>
  );
};
export default AdminPage;
