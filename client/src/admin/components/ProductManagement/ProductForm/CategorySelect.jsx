// import cl from './index.module.scss'

import Spinner from '@components/helpers/Spinner';
import { loadCategories, selectCategories } from '@redux/selectors';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';

const CategorySelect = ({ control, errors }) => {
  const purposeCategories = useSelector(selectCategories);
  const isLoading = useSelector(loadCategories);
  const name = 'purpose_category';

  return isLoading ? (
    <Spinner />
  ) : (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <>
          <select
            {...field}
            id={name}
            multiple
            value={value}
            onChange={(event) => {
              const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
              onChange(selectedValues);
            }}
          >
            {purposeCategories.map((value, idx) => (
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
export default CategorySelect;
