import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@components/UI/Button/Button';
import Filters from '@assets/svg/CatalogPage/Filters';
import Sorting from '@assets/svg/CatalogPage/Sorting';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import MobileSorting from './Sorting/Sorting';
import { useState } from 'react';
import TopLink from '@components/UI/TopLink/TopLink';
import FilterByCategory from '../FilterCategory/FilterByCategory';

const Top = ({ setIsShowAside }) => {
  const [isShowMobileSorting, setIsShowMobileSorting] = useState(false);
  const { deskmin, deskmax, tablet } = useScreenSizes();

  const showAside = () => setIsShowAside(true);
  const showSorting = () => setIsShowMobileSorting(true);

  const { getTranslation } = useTranslationNamespace('catalogPage');
  return (
    <section className={cl.catalogSection}>
      <div>
        <TopLink />
      </div>
      <br />
      {(tablet || deskmin || deskmax) && <FilterByCategory />}
      {!(deskmin || deskmax) && (
        <section className={cl.sortSection}>
          <Button variant="secondary" onClick={showAside}>
            <Filters />
            {getTranslation('filters')}
          </Button>
          <Button variant="secondary" onClick={showSorting}>
            <Sorting />
            {getTranslation('sorting')}
          </Button>
        </section>
      )}
      {isShowMobileSorting && <MobileSorting setIsShowMobileSorting={setIsShowMobileSorting} />}
    </section>
  );
};
export default Top;
