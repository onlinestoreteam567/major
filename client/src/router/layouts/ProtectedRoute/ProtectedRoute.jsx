import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../../redux/admin/selectors';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { fetchBestSellers, fetchProductsAll, fetchSets } from '@redux/products/service';
import { fetchCategories, fetchTypes } from '@redux/params/service';
import { fetchBanner } from '@redux/banner/service';
import { fetchPartners } from '@redux/partners/service';
import AdminNavigation from '../../../components/admin/AdminNavigation/AdminNavigation';
import cl from './index.module.scss';
import { fetchPromocode } from '@redux/admin/promocode/service';
import AdminGlobalMessage from './AdminGlobalMessage';

const ProtectedRoute = () => {
  const auth = useSelector(selectAccessToken);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth) {
      dispatch(fetchProductsAll());
      dispatch(fetchBestSellers());
      dispatch(fetchSets());
      dispatch(fetchTypes());
      dispatch(fetchCategories());
      dispatch(fetchPromocode());
      dispatch(fetchBanner());
      dispatch(fetchPartners());
    }
  }, [auth, i18n.language, dispatch]);

  return auth ? (
    <div className={cl.adminLayout}>
      <AdminNavigation />
      <Outlet />
      <AdminGlobalMessage />
    </div>
  ) : (
    <Navigate to="/admin/login" replace />
  );
};

export default ProtectedRoute;
