// import cl from './index.module.scss';

import { Select } from '@components/form-components';
import Spinner from '@components/helpers/Spinner';
import { loadCategories } from '@redux/selectors';
import { useSelector } from 'react-redux';

const PurposeCategorySelect = ({ items, register, errors }) => {
  const isLoading = useSelector(loadCategories);

  return (
    <>
      {isLoading ? <Spinner /> : <Select name="purpose_category" register={register} options={items} multiple={true} />}
      {errors['purpose_category'] && <p style={{ color: 'red' }}>{errors['purpose_category'].message}</p>}
    </>
  );
};
export default PurposeCategorySelect;
