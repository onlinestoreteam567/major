import { useState } from 'react';
import cl from './index.module.scss';
import CheckboxItem from './CheckboxItem';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  return (
    <section className={cl.assignmentWrapper}>
      <h4>{t('category', { ns: 'catalogPage' })}</h4>
      <ul>
        {checkboxData.map((item) => (
          <CheckboxItem
            key={item.key}
            checked={categories[item.key]}
            label={t(item.label, { ns: 'catalogPage' })}
            onChange={() => handleCategoryChange(item.key)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Category;
