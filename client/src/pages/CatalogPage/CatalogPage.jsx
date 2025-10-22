import cl from './index.module.scss';
import Products from './CatalogProductList/CatalogProductList';
import { useEffect, useState } from 'react';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import CatalogFilters from './CatalogFilters/CatalogFilters';
import CatalogTop from './CatalogTop/CatalogTop';
import { Helmet } from 'react-helmet-async';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { injectReducers } from '@config/store';
import { productsReducer } from '@redux/products/listSlice';
import Spinner from '@components/UI/Spinner/Spinner';
import { categoryReducer } from '@redux/params/categorySlice';
import { typesReducer } from '@redux/params/purposeSlice';
import { filterReducer } from '@redux/filter/filterSlice';

const CatalogPage = () => {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const { deskmin, deskmax } = useScreenSizes();
  const [isShowCatalogFilters, setIsShowCatalogFilters] = useState(deskmin || deskmax);
  const [isReducerLoaded, setIsReducerLoaded] = useState(false);

  const catalogReducers = {
    category: categoryReducer,
    types: typesReducer,
    products: productsReducer,
    filter: filterReducer,
  };

  useEffect(() => {
    injectReducers(catalogReducers);
    setIsReducerLoaded(true);
  }, []);

  return !isReducerLoaded ? (
    <Spinner />
  ) : (
    <div className={cl.catalogWrapper}>
      <Helmet>
        <title>{getTranslation('metaTitle')}</title>
        <meta name="description" content={getTranslation('metaDescription')} />
      </Helmet>

      <CatalogTop setIsShowCatalogFilters={setIsShowCatalogFilters} />
      <section className={cl.mainWrapper}>
        {(deskmin || deskmax || isShowCatalogFilters) && (
          <CatalogFilters setIsShowCatalogFilters={setIsShowCatalogFilters} />
        )}
        <Products />
      </section>
    </div>
  );
};

export default CatalogPage;
