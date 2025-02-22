import cl from './index.module.scss';
import Aside from './Aside/Aside';
import Top from './Top/Top';
import Container from '@pages/CatalogPage/Products/CardsContainer/CardsContainer';
import Products from './Products/Products';

import { useState } from 'react';
import FilterByCategory from './FilterCategory/FilterByCategory';
import useScreenSizes from '@hooks/useScreenSizes';

const CatalogPage = () => {
  const [isAsideMobile, setIsAsideMobile] = useState(false);
  const [isHiddenAside, setisHiddenAside] = useState(false);
  const { tablet, deskmin, deskmax } = useScreenSizes();

  return (
    <div className={cl.catalogWrapper}>
      {(tablet || deskmin || deskmax) && <FilterByCategory />}
      <Top setIsAsideMobile={setIsAsideMobile} setisHiddenAside={setisHiddenAside} />
      <section className={cl.mainWrapper}>
        <div className={`${cl.wrapAside} ${isAsideMobile ? cl.asideMobile : ''}`}>
          <Aside
            setIsAsideMobile={setIsAsideMobile}
            isHiddenAside={isHiddenAside}
            setisHiddenAside={setisHiddenAside}
          ></Aside>
        </div>

        <Products>
          <Container />
        </Products>
      </section>
    </div>
  );
};

export default CatalogPage;
