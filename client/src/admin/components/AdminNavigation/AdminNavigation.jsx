import useScreenSizes from '@hooks/useScreenSizes';
import cl from './index.module.scss';
import { NavLink } from 'react-router-dom';

const AdminNavigation = () => {
  const { tablet, deskmin, deskmax } = useScreenSizes();

  const isMobile = tablet || deskmin || deskmax;

  return !isMobile ? (
    <button>
      <img src="/svg/admin/navigation/burger.svg" />
    </button>
  ) : (
    <nav className={cl.adminNavigation} style={{ color: 'black' }}>
      <NavLink to={`/admin/products`}>
        <img src="/images/admin/navigation/Logo.png" />
      </NavLink>

      <div>
        <NavLink to={`/admin/products`} className={cl.active}>
          <img src="/images/admin/navigation/Goods icon.png" />
          <span>Товари</span>
        </NavLink>
        <NavLink to={`/admin/categories`}>
          <img src="/images/admin/navigation/Catalog icons.png" />
          <span>Категорії</span>
        </NavLink>
        <NavLink to={`/admin/promocodes`}>
          <img src="/images/admin/navigation/Promo icons.png" />
          <span>Промокоди</span>
        </NavLink>
        <NavLink to={`/admin/partners`}>
          <img src="/images/admin/navigation/Map.png" />
          <span>Карта</span>
        </NavLink>
        <button>
          <img src="/images/admin/navigation/Articles icon.png" />
          <span>Статті</span>
        </button>
        <NavLink to={`/admin/banners`}>
          <img src="/images/admin/navigation/Banners icons.png" />
          <span>Банери</span>
        </NavLink>
        <NavLink to={`/admin/reviews`}>
          <img src="/images/admin/navigation/Rewievs icons.png" />
          <span>Відгуки</span>
        </NavLink>
        <button>
          <img src="/images/admin/navigation/Contact icon.png" />
          <span>Контакти</span>
        </button>
      </div>

      <div>
        <button>
          <img src="/images/admin/navigation/Setting icons.png" />
          <span>Налаштування</span>
        </button>
        <button>
          <img src="/images/admin/navigation/Exit icons.png" />
          <span>Вихід</span>
        </button>
      </div>
    </nav>
  );
};
export default AdminNavigation;
