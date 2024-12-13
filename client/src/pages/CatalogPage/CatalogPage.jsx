import cl from './index.module.scss';
import Aside from './Aside/Aside';
import Top from './Top/Top';
import Container from '@pages/CatalogPage/Products/CardsContainer/CardsContainer';
import TopLink from '@components/UI/TopLink/TopLink';
import Assignment from './Aside/Assignment';
import Range from './Aside/Range';
import Category from './Aside/Category';
import Switchs from './Aside/Switchs';
import Products from './Products/Products';

const Catalog = () => {
  return (
    <div className={cl.catalogWrapper}>
      <TopLink />
      <Top />

      <section className={cl.mainWrapper}>
        <div className={cl.wrapAside}>
          <Aside>
            <Switchs />
            <Assignment />
            <Range />
            <Category />
          </Aside>
        </div>

        <Products>
          <Container />
        </Products>
      </section>
    </div>
  );
};
export default Catalog;
