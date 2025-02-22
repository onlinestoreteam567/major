import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import Button from '@components/UI/Button/Button';
import Filters from '@assets/svg/CatalogPage/Filters';
import Sorting from '@assets/svg/CatalogPage/Sorting';
import useScreenSizes from '@hooks/useScreenSizes';
import MobileSorting from './MobileSorting/MobileSorting';
import { useState } from 'react';
import TopLink from '@components/UI/TopLink/TopLink';
import FilterByCategory from '../FilterCategory/FilterByCategory';

const Top = ({ setIsAsideMobile, setisHiddenAside }) => {
  const [isShowMobileSorting, setIsShowMobileSorting] = useState(false);

  const showAside = () => {
    setIsAsideMobile(true);
    setisHiddenAside(false);
  };
  const showSorting = () => setIsShowMobileSorting(true);

  const { deskmin, deskmax, tablet } = useScreenSizes();

  const { getTranslation } = useTranslationNamespace('catalogPage');
  return (
    <section className={cl.catalogSection}>
      <div>
        <TopLink />
        <Heading type="h2">{getTranslation('catalog', 'common')}</Heading>
      </div>
      <br />
      {(tablet || deskmin || deskmax) && <FilterByCategory />}
      {!(deskmin || deskmax) && (
        <section className={cl.sortSection}>
          <Button variant="secondary" onClick={showAside}>
            <Filters />
            Фільтри
          </Button>
          <Button variant="secondary" onClick={showSorting}>
            <Sorting />
            Сортування
          </Button>
        </section>
      )}
      {isShowMobileSorting && (
        <>
          <MobileSorting setIsShowMobileSorting={setIsShowMobileSorting} />
        </>
      )}
    </section>
  );
};
export default Top;
