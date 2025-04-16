import cl from './index.module.scss';
import { Link } from 'react-router-dom';
import PurposeList from './Purpose/PurposeList/PurposeList';
import TypeList from './Type/TypeList/TypeList';
import ReturnButton from '../ReturnButton/ReturnButton';

const CategoriesManagement = () => {
  return (
    <div className={cl.categoriesManagement}>
      <div>
        <Link to={`/admin/categories/create`}>+</Link>
        <ReturnButton />;
      </div>
      <PurposeList />
      <TypeList />
    </div>
  );
};
export default CategoriesManagement;
