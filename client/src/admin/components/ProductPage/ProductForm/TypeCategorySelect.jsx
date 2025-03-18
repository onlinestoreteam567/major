// import cl from './index.module.scss';

import Spinner from '@components/helpers/Spinner';
import { loadTypes, selectTypes } from '@redux/selectors';
import { useSelector } from 'react-redux';

const TypeCategorySelect = ({ field, onChange, errors }) => {
  const items = useSelector(selectTypes);
  const isLoading = useSelector(loadTypes);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <select
        {...field}
        id="type_category"
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        {items.map((value, idx) => (
          <option key={idx} value={value.id}>
            {value.name} id: {value.id}
          </option>
        ))}
      </select>
      {errors[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}
    </>
  );
};
export default TypeCategorySelect;
