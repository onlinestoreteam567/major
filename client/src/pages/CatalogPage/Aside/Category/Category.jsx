import cl from '../index.module.scss';
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

const Category = ({ register, watch }) => {
  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <FormGroup className={cl.checkboxesWrapper} name={'category'}>
      <Heading type="h4">{getTranslation('category')}</Heading>
      <>
        {checkboxData.map((item) => (
          <CheckBox
            key={item.key}
            labelText={getTranslation(item.label)}
            name={`category.${item.key}`}
            register={register}
            watch={watch}
          />
        ))}
      </>
    </FormGroup>
  );
};

export default Category;
