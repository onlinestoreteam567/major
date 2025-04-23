import Spinner from '@components/helpers/Spinner/Spinner';
import { loadTypes, selectTypes } from '@redux/selectors';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';

const TypeSelect = ({ control, errors }) => {
  const items = useSelector(selectTypes);
  const isLoading = useSelector(loadTypes);
  const name = 'type_category';

  return isLoading ? (
    <Spinner />
  ) : (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <>
          <select
            value={value}
            {...field}
            id={name}
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
      )}
    />
  );
};
export default TypeSelect;
