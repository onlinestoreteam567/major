import Overlay from '@components/UI/Overlay/Overlay';
import useScreenSizes from '@hooks/useScreenSizes';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cl from './index.module.scss';
import { useDispatch } from 'react-redux';
import { clearSearch } from '@redux/admin/adminSearchSlice/adminSearchSlice';
import { filterProductsByName } from '@redux/products/listSlice';

const AdminNavigation = () => {
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const [isShowBurgerButton, setIsShowBurgerButton] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const isDisplayNavigation = !(tablet || deskmin || deskmax || isShowBurgerButton);
  const isMobileOverlay = !(tablet || deskmin || deskmax);

  const handleExpand = (e) => {
    const target = e.target;
    if (target.closest('a') || target.closest('button')) return;
    if (!isExpanded && tablet) setIsExpanded(true);
    if (isExpanded && tablet) {
      setIsExpanded(false);
      setIsShowBurgerButton(false);
    }
  };
  const handleClose = () => setIsShowBurgerButton(false);
  const productsGetAll = () => {
    dispatch(clearSearch());
    dispatch(filterProductsByName(''));
  };

  return isDisplayNavigation ? (
    <div className={`${cl.burgerButtonWrapper} ${isExpanded ? cl.expanded : ''}`}>
      <button onClick={() => setIsShowBurgerButton(!isShowBurgerButton)}>
        <img src="/svg/admin/navigation/burger.svg" alt="Burger menu icon" />
      </button>
    </div>
  ) : (
    <>
      {isMobileOverlay && <Overlay handleClose={handleClose} />}

      <div className={`${cl.backgroundWrapper} ${isExpanded ? cl.expanded : ''}`} onClick={handleExpand}>
        <nav>
          <NavLink to={`/admin/products`} className={({ isActive }) => (isActive ? cl.active : undefined)}>
            <img src="/images/admin/navigation/Logo.png" alt="Company Logo" />
          </NavLink>

          <div>
            <NavLink
              to={`/admin/products`}
              className={({ isActive }) => (isActive ? cl.active : undefined)}
              onClick={productsGetAll}
            >
              <img src="/images/admin/navigation/Goods icon.png" alt="Goods icon" />
              <span>Товари</span>
            </NavLink>
            <NavLink to={`/admin/categories`} className={({ isActive }) => (isActive ? cl.active : undefined)}>
              <img src="/images/admin/navigation/Catalog icons.png" alt="Catalog icon" />
              <span>Категорії</span>
            </NavLink>
            <NavLink to={`/admin/promocodes`} className={({ isActive }) => (isActive ? cl.active : undefined)}>
              <img src="/images/admin/navigation/Promo icons.png" alt="Promocodes icon" />
              <span>Промокоди</span>
            </NavLink>
            <NavLink to={`/admin/partners`} className={({ isActive }) => (isActive ? cl.active : undefined)}>
              <img src="/images/admin/navigation/Map.png" alt="Partners icon" />
              <span>Мапа</span>
            </NavLink>
            <NavLink to={`/admin/banners`} className={({ isActive }) => (isActive ? cl.active : undefined)}>
              <img src="/images/admin/navigation/Banners icons.png" alt="Banners icon" />
              <span>Банери</span>
            </NavLink>
            <NavLink to={`/admin/reviews`} className={({ isActive }) => (isActive ? cl.active : undefined)}>
              <img src="/images/admin/navigation/Rewievs icons.png" alt="Reviews icon" />
              <span>Відгуки</span>
            </NavLink>
            <NavLink to={`/admin/contacts`} className={({ isActive }) => (isActive ? cl.active : undefined)}>
              <img src="/images/admin/navigation/Contact icon.png" alt="Contact icon" />
              <span>Контакти</span>
            </NavLink>
          </div>

          <div>
            <button>
              <img src="/images/admin/navigation/Setting icons.png" alt="Settings icon" />
              <span>Налаштування</span>
            </button>
            <button>
              <img src="/images/admin/navigation/Exit icons.png" alt="Exit icon" />
              <span>Вихід</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};
export default AdminNavigation;
