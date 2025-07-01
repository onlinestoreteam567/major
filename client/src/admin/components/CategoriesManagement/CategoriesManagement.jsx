import cl from './index.module.scss';
import { Link } from 'react-router-dom';
import PurposeList from './Purpose/PurposeList/PurposeList';
import TypeList from './Type/TypeList/TypeList';
import Button from '@components/UI/Button/Button';
import { useState } from 'react';

const CategoriesManagement = () => {
  const [currentCategory, setCurrentCategory] = useState('purpose');

  return (
    <div className={cl.categoriesManagement}>
      <div className={cl.addCategoryContainer}>
        <Link to={`/admin/categories/create`}>
          <Button>Додати категорію</Button>
        </Link>
      </div>
      <div className={cl.categoriesContainer}>
        <div>
          <button
            onClick={() => setCurrentCategory('purpose')}
            className={currentCategory === 'purpose' ? cl.active : ''}
          >
            За призначенням
          </button>
          <button onClick={() => setCurrentCategory('type')} className={currentCategory === 'type' ? cl.active : ''}>
            За типом
          </button>
        </div>
        {currentCategory === 'purpose' ? <PurposeList /> : <TypeList />}
      </div>
    </div>
  );
};
export default CategoriesManagement;
