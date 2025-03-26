import cl from './index.module.scss';
import PurposeCreate from './Purpose/PurposeCreate/PurposeCreate';
import TypeCreate from './Type/TypeCreate/TypeCreate';

const CategoryCreate = () => {
  return (
    <div className={cl.categories}>
      <PurposeCreate />
      <TypeCreate />
    </div>
  );
};
export default CategoryCreate;
