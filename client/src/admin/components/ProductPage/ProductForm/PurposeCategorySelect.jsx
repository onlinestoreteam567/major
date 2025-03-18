import { selectCategories } from '@redux/selectors';
import { useSelector } from 'react-redux';

const PurposeCategorySelect = ({ field, value, onChange, errors }) => {
  const purposeCategories = useSelector(selectCategories);

  return (
    <>
      <select
        {...field}
        id="purpose_category"
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
  );
};
export default PurposeCategorySelect;
