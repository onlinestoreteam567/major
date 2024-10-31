import { useState } from 'react';
import cl from './index.module.scss';
import CheckboxItem from './CheckboxItem';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const checkboxData = [
  { key: 'normal', label: 'normal hair' },
  { key: 'colored', label: 'colored hair' },
  { key: 'thin', label: 'thin hair' },
  { key: 'damaged', label: 'damaged hair' },
  { key: 'growth', label: 'hair growth' },
  { key: 'cleansing', label: 'deep conditioning' },
];

const Assignment = () => {
  const [checkboxes, setCheckboxes] = useState({
    normal: false,
    colored: false,
    thin: false,
    damaged: false,
    growth: false,
    cleansing: false,
  });

  const handleCheckboxChange = (name) => {
    setCheckboxes((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <section className={cl.assignmentWrapper}>
      <h4>{getTranslation('assignment title')}</h4>
      <ul>
        {checkboxData.map((item) => (
          <CheckboxItem
            key={item.key}
            checked={checkboxes[item.key]}
            label={item.label}
            onChange={() => handleCheckboxChange(item.key)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Assignment;
