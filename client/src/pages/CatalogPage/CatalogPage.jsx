import cl from './index.module.scss';
import Products from './CatalogProductList/CatalogProductList';
import { useState } from 'react';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import CatalogFilters from './CatalogFilters/CatalogFilters';
import CatalogTop from './CatalogTop/CatalogTop';
import { Helmet } from 'react-helmet-async';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const CatalogPage = () => {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const { deskmin, deskmax } = useScreenSizes();
  const [isShowCatalogFilters, setIsShowCatalogFilters] = useState(deskmin || deskmax);
  return (
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
