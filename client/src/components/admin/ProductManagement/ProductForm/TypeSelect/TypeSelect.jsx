import cl from './index.module.scss';
import Spinner from '@components/helpers/Spinner/Spinner';
import { loadTypes, selectTypes } from '@redux/selectors';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import CustomSelect from '@components/admin/CustomSelect/CustomSelect';

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
      render={({ field: { value, onChange, onBlur, ...field } }) => (
        <div className={cl.customSelectWrapper}>
          <p>Категорія (за типом):</p>
          <select value={value || ''} onChange={(e) => onChange(e.target.value)} onBlur={onBlur} id={name} {...field}>
            <option value="">Обрати</option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <CustomSelect onChange={onChange} value={value} items={items} onBlur={onBlur} name={name} errors={errors} />
        </div>
      )}
    />
  );
};

export default TypeSelect;
