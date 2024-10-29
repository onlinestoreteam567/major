import BreadCrumbs from '@components/UI/BreadCrumbs/BreadCrumbs';
import cl from './index.module.scss';
import filter from '@svg/catalogPage/filter.svg';
import Aside from './Aside';

const Catalog = () => {
  return (
    <div className={cl.catalogWrapper}>
      <BreadCrumbs />

      <section>
        <h2>Каталог</h2>

        <section>
          <img src={filter} alt="" />
          <h3>Сортування</h3>
          <h3>DropDown</h3>
        </section>
      </section>

      <Aside />
    </div>
  );
};
export default Catalog;
