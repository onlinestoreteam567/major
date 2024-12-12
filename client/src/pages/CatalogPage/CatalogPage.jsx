import cl from './index.module.scss';
import Aside from './Aside/Aside';
import Top from './Top/Top';
import Container from '@UI/CardCatalog/Container';
import TopLink from '@components/UI/TopLink/TopLink';
import Assignment from './Aside/Assignment';
import Range from './Aside/Range';
import Category from './Aside/Category';
import Switchs from './Aside/Switchs';

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

        <Container />
      </section>
    </div>
  );
};
export default Catalog;
