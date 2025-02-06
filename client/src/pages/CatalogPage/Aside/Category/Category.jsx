import cl from '../index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import CheckBox from '@components/form-components/Checkbox/Checkbox';
import { FormGroup } from '@components/form-components';
import { useSelector } from 'react-redux';

const Types = ({ register, watch }) => {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const { types, status, error } = useSelector((state) => state.types);

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
        {types &&
          types.map((item) => (
            <CheckBox
              key={item.name}
              labelText={item.name}
              name={`category.${item.name} ${item.id}`}
              register={register}
              watch={watch}
            />
          ))}
      </>
    </FormGroup>
  );
};

export default Types;
