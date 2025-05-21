import { Outlet } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import useScrollToTop from '@hooks/useScrollToTop';
import cl from './index.module.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { fetchBestSellers, fetchProductsAll, fetchSets } from '@redux/products/service';
import { fetchCategories, fetchTypes } from '@redux/params/service';
import { fetchBanner } from '@redux/banner/service';
import { fetchPartners } from '@redux/partners/service';

const MainLayout = () => {
  useScrollToTop();

  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  // Make a request to the server whevenever  the component mounts or the language changes
  useEffect(() => {
    dispatch(fetchProductsAll());
    dispatch(fetchBestSellers());
    dispatch(fetchSets());
    dispatch(fetchTypes());
    dispatch(fetchCategories());
    dispatch(fetchBanner());
    dispatch(fetchPartners());
  }, [i18n.language, dispatch]);

  return (
    <div className={cl.mainLayout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
