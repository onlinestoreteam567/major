import cl from '../index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import CheckBox from '@components/form-components/Checkbox/Checkbox';
import { FormGroup } from '@components/form-components';
import { useSelector } from 'react-redux';

// const checkboxData = [
//   { key: 'shampoo', label: 'shampoo' },
//   { key: 'conditioner', label: 'conditioner' },
//   { key: 'balm', label: 'balm' },
//   { key: 'serum', label: 'serum' },
//   { key: 'cream', label: 'cream' },
//   { key: 'oil', label: 'oil' },
//   { key: 'mask', label: 'mask' },
// ];

const Category = ({ register, watch }) => {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const { items, status, error } = useSelector((state) => state.categories);

  if (status === 'loading') {
    return <div style={{ color: 'black', fontSize: '24px' }}>Завантаження категорій...</div>;
  }

  if (status === 'failed') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
  }

  return (
    <FormGroup className={cl.checkboxesWrapper} name={'category'}>
      <Heading type="h4">{getTranslation('category')}</Heading>
      <>
        {items &&
          items.map((item) => (
            <CheckBox
              key={item.name}
              labelText={item.name}
              name={`category.${item.name}`}
              register={register}
              watch={watch}
            />
          ))}
      </>
    </FormGroup>
  );
};

export default Category;
