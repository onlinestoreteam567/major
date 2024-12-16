import { useState } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import { FormGroup } from '@components/form-components';
import CheckBox from '@components/form-components/Checkbox/Checkbox';

const checkboxData = [
  { key: 'normal', label: 'normalHair' },
  { key: 'colored', label: 'coloredHair' },
  { key: 'thin', label: 'thinHair' },
  { key: 'damaged', label: 'damagedHair' },
  { key: 'growth', label: 'hairGrowth' },
  { key: 'cleansing', label: 'deepConditioning' },
];

const Assignment = ({ register, handleSubmit }) => {
  const [checkboxes, setCheckboxes] = useState({
    normal: false,
    colored: false,
    thin: false,
    damaged: false,
    growth: false,
    cleansing: false,
  });

  const { getTranslation } = useTranslationNamespace('catalogPage');

  const handleCheckboxChange = (name) => {
    setCheckboxes((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
    handleSubmit();
  };

  return (
    <FormGroup className={cl.assignmentWrapper} name={'assignment'}>
      <Heading type="h4">{getTranslation('assignmentTitle')}</Heading>
      <>
        {checkboxData.map((item) => (
          <CheckBox
            key={item.key}
            checked={checkboxes[item.key]}
            labelText={getTranslation(item.label)}
            name={item.key}
            register={register}
            onChange={() => handleCheckboxChange(item.key)}
          />
        ))}
      </>
    </FormGroup>
  );
};

export default Assignment;
