import BreadCrumbs from '@components/UI/BreadCrumbs/BreadCrumbs';
import cl from './index.module.scss';
import Aside from './Aside/Aside';
import Top from './Top/Top';
import Products from './Products/Products';

const Catalog = () => {
  return (
    <div className={cl.catalogWrapper}>
      <BreadCrumbs />
      <Top />

      <section className={cl.mainWrapper}>
        <Aside />
        <Products />
      </section>
    </div>
  );
};
export default Catalog;
