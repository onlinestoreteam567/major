import BreadCrumbs from '@components/UI/BreadCrumbs/BreadCrumbs';
import cl from './index.module.scss';
import Aside from './Aside/Aside';
import Top from './Top/Top';
// import Products from './Products/Products';
import Container from '@components/UI/CardCatalog/Container';

const Catalog = () => {
  return (
    <div className={cl.catalogWrapper}>
      <BreadCrumbs />
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
