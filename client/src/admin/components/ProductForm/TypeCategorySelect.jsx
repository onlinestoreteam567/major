// import cl from './index.module.scss';

import { Select } from '@components/form-components';
import Spinner from '@components/helpers/Spinner';
import { loadTypes, selectTypes } from '@redux/selectors';
import { useSelector } from 'react-redux';

const TypeCategorySelect = ({ register, errors }) => {
  const isLoading = useSelector(loadTypes);
  const items = useSelector(selectTypes);

  return (
    <>
      {isLoading ? <Spinner /> : <Select name="type_category" register={register} options={items} multiple={true} />}
      {errors['type_category'] && <p style={{ color: 'red' }}>{errors['type_category'].message}</p>}
    </>
  );
};
export default TypeCategorySelect;
