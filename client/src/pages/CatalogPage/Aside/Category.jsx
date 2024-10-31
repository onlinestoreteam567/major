import { useState } from 'react';
import cl from './index.module.scss';
import CheckboxItem from './CheckboxItem';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const checkboxData = [
  { key: 'shampoo', label: 'shampoo' },
  { key: 'conditioner', label: 'conditioner' },
  { key: 'balm', label: 'balm' },
  { key: 'serum', label: 'serum' },
  { key: 'cream', label: 'cream' },
  { key: 'oil', label: 'oil' },
  { key: 'mask', label: 'mask' },
];

const Category = () => {
  const [categories, setCategories] = useState({
    shampoo: false,
    conditioner: false,
    balm: false,
    serum: false,
    cream: false,
    oil: false,
    mask: false,
  });

  const handleCategoryChange = (name) => {
    setCategories((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <section className={cl.assignmentWrapper}>
      <h4>{getTranslation('category')}</h4>
      <ul>
        {checkboxData.map((item) => (
          <CheckboxItem
            key={item.key}
            checked={categories[item.key]}
            label={getTranslation(item.label)}
            onChange={() => handleCategoryChange(item.key)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Category;
