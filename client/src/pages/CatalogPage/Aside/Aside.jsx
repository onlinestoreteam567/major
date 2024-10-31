import cl from './index.module.scss';
import Assignment from './Assignment';
import Range from './Range';
import Category from './Category';
import Switchs from './Switchs';

const Aside = () => {
  return (
    <aside className={cl.aside}>
      <Switchs />
      <Assignment />
      <Range />
      <Category />
    </aside>
  );
};
export default Aside;
