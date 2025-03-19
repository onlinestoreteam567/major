import cl from './index.module.scss';
import { Link } from 'react-router-dom';
import PurposeList from './PurposeList';
import TypeList from './TypeList';

const CategoriesManagement = () => {
  // todo Implement logic to fetch both categories for production version

  return (
    <div className={cl.categoriesManagement}>
      <div>
        <Link to={`/admin/categories/create`}>+</Link>
      </div>
      <PurposeList />
      <TypeList />
    </div>
  );
};
export default CategoriesManagement;
