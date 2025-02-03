import cl from './index.module.scss';
import Dropdown from '@UI/Dropdown/Dropdown';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import Button from '@components/UI/Button/Button';
import Filters from '@assets/svg/CatalogPage/Filters';
import Sorting from '@assets/svg/CatalogPage/Sorting';
import useScreenSizes from '@hooks/useScreenSizes';
import MobileSorting from './MobileSorting/MobileSorting';
import { useState } from 'react';
import TopLink from '@components/UI/TopLink/TopLink';

const Top = ({ setIsAsideMobile, setisHiddenAside }) => {
  const [isShowMobileSorting, setIsShowMobileSorting] = useState(false);

  const showAside = () => {
    setIsAsideMobile(true);
    setisHiddenAside(false);
  };
  const showSorting = () => setIsShowMobileSorting(true);

  const { deskmin, deskmax } = useScreenSizes();

  const { getTranslation } = useTranslationNamespace('catalogPage');
  return (
    <section className={cl.catalogSection}>
      <div>
        <TopLink />
        <Heading type="h2">{getTranslation('catalog', 'common')}</Heading>
      </div>
      <section className={cl.sortSection}>
        {deskmin || deskmax ? (
          // Deskmin and Deskmax
          <>
            <section>
              <img src={'svg/catalogPage/filter.svg'} alt="" />
              <Heading type="h4">{getTranslation('sorting')}:</Heading>
            </section>
            <Dropdown
              options={['sortByPopularity', 'sortByPriceAsc', 'sortByPriceDesc']}
              onSelect={(option) => console.log(option)}
            />
          </>
        ) : (
          // Mobile and Tablet
          <>
            <Button variant="secondary" onClick={showAside}>
              <Filters />
              Фільтри
            </Button>
            <Button variant="secondary" onClick={showSorting}>
              <Sorting />
              Сортування
            </Button>
          </>
        )}
      </section>
      {isShowMobileSorting && (
        <>
          <MobileSorting setIsShowMobileSorting={setIsShowMobileSorting} />
        </>
      )}
    </section>
  );
};
export default Top;
