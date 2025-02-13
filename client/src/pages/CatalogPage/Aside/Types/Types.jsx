import cl from '../index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import CheckBox from '@UI/Checkbox/Checkbox';
import { FormGroup } from '@components/form-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductListTypes } from '@services/ProductListService';

const Types = () => {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const { types, status, error } = useSelector((state) => state.types);
  const dispatch = useDispatch();

  if (status === 'loading') {
    return <div style={{ color: 'black', fontSize: '24px' }}>Завантаження категорій...</div>;
  }

  if (status === 'failed') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
  }

  const getTypes = (id) => {
    dispatch(fetchProductListTypes(id));
  };

  return (
    <FormGroup className={cl.checkboxesWrapper} name={'category'}>
      <Heading type="h4">{getTranslation('category')}</Heading>
      <>
        {types && types.map((item) => <CheckBox key={item.name} item={item} name="typesGroup" getTypes={getTypes} />)}
      </>
    </FormGroup>
  );
};

export default Types;
