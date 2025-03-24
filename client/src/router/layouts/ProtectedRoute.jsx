import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../admin/redux/selectors';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { fetchBestSellers, fetchProductsAll, fetchSets } from '@redux/products/service';
import { fetchCategories, fetchTypes } from '@redux/params/service';
import { fetchPromocode } from '../../admin/redux/service';

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
    }
  }, [auth, i18n.language, dispatch]);

  return auth ? (
    <section className="ro">
      <Outlet />
    </section>
  ) : (
    <Navigate to="/admin/login" replace />
  );
};

export default ProtectedRoute;
