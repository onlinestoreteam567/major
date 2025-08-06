import CheckedRadio from '@assets/svg/Admin/Radios/CheckedRadio/CheckedRadio';
import UncheckedRadio from '@assets/svg/Admin/Radios/UncheckedRadio/UncheckedRadio';
import { useState } from 'react';
import PurposeCreate from '../Purpose/PurposeCreate/PurposeCreate';
import TypeCreate from '../Type/TypeCreate/TypeCreate';
import cl from './index.module.scss';

const CategoryCreate = () => {
  const [currentCategory, setCurrentCategory] = useState('purpose');

  const handleCategoryChange = (event) => setCurrentCategory(event.target.value);

  return (
    <div className={cl.categoryCreate}>
      <div>
        <label>
          <span>{currentCategory === 'purpose' ? <CheckedRadio></CheckedRadio> : <UncheckedRadio />}</span>
          <input type="radio" value="purpose" checked={currentCategory === 'purpose'} onChange={handleCategoryChange} />
          За призначенням
        </label>

        <label>
          <span>{currentCategory === 'type' ? <CheckedRadio /> : <UncheckedRadio />}</span>
          <input type="radio" value="type" checked={currentCategory === 'type'} onChange={handleCategoryChange} />
          За типом
        </label>
      </div>

      <div className={cl.categories}>{currentCategory === 'purpose' ? <PurposeCreate /> : <TypeCreate />}</div>
    </div>
  );
};

export default CategoryCreate;
