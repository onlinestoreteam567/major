import cl from './index.module.scss';
import Aside from './Aside/Aside';
import Top from './Top/Top';
import Container from '@pages/CatalogPage/Products/CardsContainer/CardsContainer';
import Products from './Products/Products';
import { useState } from 'react';
import useScreenSizes from '@hooks/useScreenSizes';

const CatalogPage = () => {
  const { deskmin, deskmax } = useScreenSizes();
  const [isShowAside, setIsShowAside] = useState(deskmin);
  return (
    <div className={cl.catalogWrapper}>
      <Top setIsShowAside={setIsShowAside} />
      <section className={cl.mainWrapper}>
        {(isShowAside || deskmin || deskmax) && <Aside setIsShowAside={setIsShowAside} />}
        <Products>
          <Container />
        </Products>
      </section>
    </div>
  );
};

export default CatalogPage;
