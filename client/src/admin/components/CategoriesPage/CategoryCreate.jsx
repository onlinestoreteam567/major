import cl from './index.module.scss';
import PurposeCreate from './PurposeCreate/PurposeCreate';
import TypeCreate from './TypeCreate/TypeCreate';

const CategoryCreate = () => {
  return (
    <div className={cl.categories}>
      <PurposeCreate />
      <TypeCreate />
    </div>
  );
};
export default CategoryCreate;
