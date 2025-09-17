import Overlay from '@components/UI/Overlay/Overlay';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cl from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsByName } from '@redux/products/listSlice';
import { clearSearch } from '@redux/admin/search/adminProductSearchSlice';
import { clearSearch as clearSearchReviews } from '@redux/admin/search/adminReviewsSearchSlice';
import { reviewsGetAll } from '@redux/reviews/service';
import { fetchPromocode } from '@redux/admin/promocode/service';
import useCategoryActive from './hooks/useCategoryActive';
import handleExpand from './helpers/handleExpand';
import { selectRole } from '@redux/selectors';
import LogOut from './Logout';

const AdminNavigation = () => {
  const isCategoryActive = useCategoryActive();
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const [isShowBurgerButton, setIsShowBurgerButton] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const role = useSelector(selectRole);
  const isShowAdminSections = role === 1;

  const isDisplayNavigation = !(tablet || deskmin || deskmax || isShowBurgerButton);
  const isMobileOverlay = !(tablet || deskmin || deskmax);

  const handleClose = () => setIsShowBurgerButton(false);
  const productsClearSearch = () => {
    dispatch(clearSearch());
    dispatch(filterProductsByName(''));
  };
  const reviewsClearSearch = () => {
    dispatch(clearSearchReviews());
    dispatch(reviewsGetAll());
  };
  const promocodeClearFilter = () => dispatch(fetchPromocode());
  return isDisplayNavigation ? (
    <div className={`${cl.burgerButtonWrapper} ${isExpanded ? cl.expanded : ''}`}>
      <button onClick={() => setIsShowBurgerButton(!isShowBurgerButton)}>
        <img src="/svg/admin/navigation/burger.svg" alt="Burger menu icon" />
      </button>
    </div>
  ) : (
    <>
      {isMobileOverlay && <Overlay handleClose={handleClose} />}

      <div
        className={`${cl.backgroundWrapper} ${isExpanded ? cl.expanded : ''} ${!isShowAdminSections ? cl.manager : ''}`}
        onClick={(e) => handleExpand(e, isExpanded, setIsExpanded, tablet, setIsShowBurgerButton)}
      >
        <nav>
          <NavLink to={`/admin/products`} className={({ isActive }) => (isActive ? cl.active : undefined)}>
            <img src="/images/admin/navigation/Logo.png" alt="Company Logo" />
          </NavLink>

          <div>
            <NavLink
              to={`/admin/products`}
              className={({ isActive }) => (isActive ? cl.active : undefined)}
              onClick={productsClearSearch}
            >
              <img src="/images/admin/navigation/Goods icon.png" alt="Goods icon" />
              <span>Товари</span>
            </NavLink>
            <NavLink to="/admin/categories" className={isCategoryActive ? cl.active : undefined}>
              <img src="/images/admin/navigation/Catalog icons.png" alt="Catalog icon" />
              <span>Категорії</span>
            </NavLink>
            <NavLink
              to={`/admin/promocodes`}
              onClick={promocodeClearFilter}
              className={({ isActive }) => (isActive ? cl.active : undefined)}
            >
              <img src="/images/admin/navigation/Promo icons.png" alt="Promocodes icon" />
              <span>Промокоди</span>
            </NavLink>
            {isShowAdminSections && (
              <NavLink to={`/admin/partners`} className={({ isActive }) => (isActive ? cl.active : undefined)}>
                <img src="/images/admin/navigation/Map.png" alt="Partners icon" />
                <span>Мапа</span>
              </NavLink>
            )}
            {isShowAdminSections && (
              <NavLink to={`/admin/banners`} className={({ isActive }) => (isActive ? cl.active : undefined)}>
                <img src="/images/admin/navigation/Banners icons.png" alt="Banners icon" />
                <span>Банери</span>
              </NavLink>
            )}
            <NavLink
              to={`/admin/reviews`}
              className={({ isActive }) => (isActive ? cl.active : undefined)}
              onClick={reviewsClearSearch}
            >
              <img src="/images/admin/navigation/Rewievs icons.png" alt="Reviews icon" />
              <span>Відгуки</span>
            </NavLink>

            {isShowAdminSections && (
              <NavLink to={`/admin/contacts`} className={({ isActive }) => (isActive ? cl.active : undefined)}>
                <img src="/images/admin/navigation/Contact icon.png" alt="Contact icon" />
                <span>Контакти</span>
              </NavLink>
            )}
          </div>

          <div>
            {isShowAdminSections && (
              <button>
                <img src="/images/admin/navigation/Setting icons.png" alt="Settings icon" />
                <span>Налаштування</span>
              </button>
            )}

            <LogOut />
          </div>
        </nav>
      </div>
    </>
  );
};
export default AdminNavigation;
