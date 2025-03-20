import cl from './index.module.scss';
import PurposeForm from './PurposeForm';
import TypeForm from './TypeForm';

const CategoryCreate = () => {
  return (
    <div className={cl.categories}>
      <PurposeForm />
      <TypeForm />
    </div>
  );
};
export default CategoryCreate;
