import { useState } from 'react';
import cl from './index.module.scss';
import CheckboxItem from './CheckboxItem';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@components/UI/Heading/Heading';

const checkboxData = [
  { key: 'normal', label: 'normalHair' },
  { key: 'colored', label: 'coloredHair' },
  { key: 'thin', label: 'thinHair' },
  { key: 'damaged', label: 'damagedHair' },
  { key: 'growth', label: 'hairGrowth' },
  { key: 'cleansing', label: 'deepConditioning' },
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
      <Heading type="h4">{getTranslation('assignmentTitle')}</Heading>
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
