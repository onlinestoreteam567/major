import cl from './index.module.scss';
import { NavLink } from 'react-router-dom';

const AdminNavigation = () => {
  return (
    <nav style={{ color: 'black' }}>
      <NavLink to={`/admin/products`}>
        <img src="/images/admin/navigation/Logo.png" alt="" />
      </NavLink>
      <NavLink to={`/admin/products`}>
        <img src="/images/admin/navigation/GoodsIcon.png" alt="" />
      </NavLink>
      <NavLink to={`/admin/categories`}>
        <img src="/images/admin/navigation/Catalog icons.png" alt="" />
      </NavLink>
      <NavLink to={`/admin/promocodes`}>
        <img src="/images/admin/navigation/Promo icons.png" alt="" />
      </NavLink>
      <NavLink to={`/admin/partners`}>
        <img src="/images/admin/navigation/Map.png" alt="" />
      </NavLink>
      <button>
        <img src="/images/admin/navigation/Articles icon.png" alt="" />
      </button>
      <NavLink to={`/admin/banners`}>
        <img src="/images/admin/navigation/Banners icons.png" alt="" />
      </NavLink>
      <NavLink to={`/admin/reviews`}>
        <img src="/images/admin/navigation/Rewievs icons.png" alt="" />
      </NavLink>
      <button>
        <img src="/images/admin/navigation/Contact icon.png" alt="" />
      </button>

      <button>
        <img src="/images/admin/navigation/Setting icons.png" alt="" />
      </button>
      <button>
        <img src="/images/admin/navigation/Exit icons.png" alt="" />
      </button>
    </nav>
  );
};
export default AdminNavigation;
