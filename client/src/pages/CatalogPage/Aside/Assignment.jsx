import { useState } from 'react';
import cl from './index.module.scss';
import CheckboxItem from './CheckboxItem';
import { useTranslation } from 'react-i18next';

const checkboxData = [
  { key: 'normal', label: 'for normal hair' },
  { key: 'colored', label: 'for colored hair' },
  { key: 'thin', label: 'for thin hair' },
  { key: 'damaged', label: 'for damaged hair' },
  { key: 'growth', label: 'for hair growth' },
  { key: 'cleansing', label: 'deep cleansing' },
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

  const { t } = useTranslation();

  return (
    <section className={cl.assignmentWrapper}>
      <h4>{t('assignment title', { ns: 'catalogPage' })}</h4>
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
