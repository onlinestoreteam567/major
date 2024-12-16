import { useState } from 'react';
import cl from './index.module.scss';
// import CheckboxItem from './CheckboxItem';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import { FormGroup } from '@components/form-components';
import CheckBox from '@components/form-components/Checkbox/Checkbox';
import { yupResolver } from '@hookform/resolvers/yup';
import { assignmentSchema } from '@validations/assignmentSchema';
import { useForm } from 'react-hook-form';

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

  console.log(checkboxes);

  const { register } = useForm({
    resolver: yupResolver(assignmentSchema),
  });

  const handleCheckboxChange = (name) => {
    setCheckboxes((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <FormGroup className={cl.assignmentWrapper} name={'assignment'}>
      <Heading type="h4">{getTranslation('assignmentTitle')}</Heading>
      <ul>
        {checkboxData.map((item) => (
          <CheckBox
            key={item.key}
            checked={checkboxes[item.key]}
            name={item.key}
            labelText={item.label}
            onChange={() => handleCheckboxChange(item.key)}
            register={register}
          />
        ))}
      </ul>
    </FormGroup>
  );
};

export default Assignment;
