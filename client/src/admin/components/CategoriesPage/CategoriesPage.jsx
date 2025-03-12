import cl from './index.module.scss';
import PurposeForm from './PurposeForm';
import TypeForm from './TypeForm';

const CategoriesPage = () => {
  return (
    <div className={cl.categories}>
      <PurposeForm />
      <TypeForm />
    </div>
  );
};
export default CategoriesPage;
