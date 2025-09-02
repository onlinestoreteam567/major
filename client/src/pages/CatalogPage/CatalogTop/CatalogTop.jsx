import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@components/UI/Button/Button';
import Filters from '@assets/svg/CatalogPage/Filters';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import MobileSorting from './CatalogSorting/CatalogSorting';
import { useState } from 'react';
import TopLink from '@components/UI/TopLink/TopLink';
import FilterByCategory from '../FilterCategory/FilterByCategory';
import Sorting from '@assets/svg/CatalogPage/Sorting';

const CatalogTop = ({ setIsShowCatalogFilters }) => {
  const [isShowMobileSorting, setIsShowMobileSorting] = useState(false);
  const { deskmin, deskmax, tablet } = useScreenSizes();

  const showFilters = () => setIsShowCatalogFilters(true);
  const showSorting = () => setIsShowMobileSorting(true);

  const { getTranslation } = useTranslationNamespace('catalogPage');
  return (
    <section className={cl.catalogTop}>
      <div>
        <TopLink />
      </div>
      <br />
      {(tablet || deskmin || deskmax) && <FilterByCategory />}
      {!(deskmin || deskmax) && (
        <section className={cl.sortSection}>
          <Button variant="secondary" onClick={showFilters}>
            <Filters />
            {getTranslation('filters')}
          </Button>
          <Button variant="secondary" onClick={() => showSorting()}>
            <Sorting />
            {getTranslation('sorting')}
          </Button>
        </section>
      )}
      {isShowMobileSorting && <MobileSorting setIsShowMobileSorting={setIsShowMobileSorting} />}
    </section>
  );
};
export default CatalogTop;
