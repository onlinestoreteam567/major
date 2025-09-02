import cl from './index.module.scss';
import Products from './CatalogProductList/CatalogProductList';
import { useState } from 'react';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import CatalogFilters from './CatalogFilters/CatalogFilters';
import CatalogTop from './CatalogTop/CatalogTop';

const CatalogPage = () => {
  const { deskmin, deskmax } = useScreenSizes();
  const [isShowCatalogFilters, setIsShowCatalogFilters] = useState(deskmin || deskmax);
  return (
    <div className={cl.catalogWrapper}>
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
