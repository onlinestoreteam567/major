import cl from './index.module.scss';
import Aside from './Aside/Aside';
import Top from './Top/Top';
import Container from '@pages/CatalogPage/Products/CardsContainer/CardsContainer';
import Products from './Products/Products';

import { useState } from 'react';

const CatalogPage = () => {
  const [isAsideMobile, setIsAsideMobile] = useState(false);
  const [isHiddenAside, setisHiddenAside] = useState(false);

  // if (getValues().category) {
  //   const filteredCategories = Object.entries(getValues().category)
  //     .filter(([, value]) => value)
  //     .map(([key]) => key);

  //   if (filteredCategories.length > 0) {
  //     const fetchProductsWithParams = (id) => {
  //       dispatch(setFetchType('withParams'));
  //       dispatch(fetchProductListWithParams(id));
  //     };
  //     fetchProductsWithParams(filteredCategories[0].match(/\d+/)?.[0]);
  //   } else {
  //     dispatch(setFetchType('default'));
  //     dispatch(fetchProductList());
  //   }
  // }

  return (
    <div className={cl.catalogWrapper}>
      <Top setIsAsideMobile={setIsAsideMobile} setisHiddenAside={setisHiddenAside} />

      <section className={cl.mainWrapper}>
        <div className={`${cl.wrapAside} ${isAsideMobile ? cl.asideMobile : ''}`}>
          <Aside setIsAsideMobile={setIsAsideMobile} isHiddenAside={isHiddenAside} setisHiddenAside={setisHiddenAside}>
            {/* <Switchs register={register} watch={watch} />

            <PriceRange setValue={setValue} register={'priceRange'} name="priceRange" />
            <Types register={register} watch={watch} /> */}
          </Aside>
        </div>

        <Products>
          <Container />
        </Products>
      </section>
    </div>
  );
};

export default CatalogPage;
