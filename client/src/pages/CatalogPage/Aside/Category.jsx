import { useState } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import CheckBox from '@components/form-components/Checkbox/Checkbox';
import { FormGroup } from '@components/form-components';

const checkboxData = [
  { key: 'shampoo', label: 'shampoo' },
  { key: 'conditioner', label: 'conditioner' },
  { key: 'balm', label: 'balm' },
  { key: 'serum', label: 'serum' },
  { key: 'cream', label: 'cream' },
  { key: 'oil', label: 'oil' },
  { key: 'mask', label: 'mask' },
];

const Category = ({ register, handleSubmit }) => {
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
    handleSubmit();
  };

  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <FormGroup className={cl.assignmentWrapper} name={'category'}>
      <Heading type="h4">{getTranslation('category')}</Heading>
      <>
        {checkboxData.map((item) => (
          <CheckBox
            key={item.key}
            checked={categories[item.key]}
            labelText={getTranslation(item.label)}
            name={item.key}
            register={register}
            onChange={() => handleCategoryChange(item.key)}
          />
        ))}
      </>
    </FormGroup>
  );
};

export default Category;
