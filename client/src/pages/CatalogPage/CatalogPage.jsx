// import BreadCrumbs from '@UI/BreadCrumbs/BreadCrumbs';
import cl from './index.module.scss';
import Aside from './Aside/Aside';
import Top from './Top/Top';
// import Products from './Products/Products';
import Container from '@UI/CardCatalog/Container';
import TopLink from '@components/UI/TopLink/TopLink';

const Catalog = () => {
  return (
    <div className={cl.catalogWrapper}>
      {/* <BreadCrumbs /> */}
      <TopLink />
      <Top />

      <section className={cl.mainWrapper}>
        <div className={cl.wrapAside}>
          <Aside />
        </div>

        {/* <Products /> */}

        <Container />
      </section>
    </div>
  );
};
export default Catalog;
