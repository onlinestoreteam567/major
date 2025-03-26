import cl from './index.module.scss';
import PurposeCreate from './PurposeCreate/PurposeCreate';
import TypeForm from './TypeForm';

const CategoryCreate = () => {
  return (
    <div className={cl.categories}>
      <PurposeCreate />
      <TypeForm />
    </div>
  );
};
export default CategoryCreate;
