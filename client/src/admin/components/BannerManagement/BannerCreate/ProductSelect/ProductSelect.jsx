import Spinner from '@components/helpers/Spinner';
import { loadProducts, selectProducts } from '@redux/selectors';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';

const ProductSelect = ({ control, errors }) => {
  const items = useSelector(selectProducts);
  const isLoading = useSelector(loadProducts);
  const name = 'product_id';

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
            <option value="">Оберіть товар для банеру</option>
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

export default ProductSelect;
