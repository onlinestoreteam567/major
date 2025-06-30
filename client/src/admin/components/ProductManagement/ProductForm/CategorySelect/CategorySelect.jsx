import cl from './index.module.scss';
import Spinner from '@components/helpers/Spinner/Spinner';
import { loadCategories, selectCategories } from '@redux/selectors';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import CustomMultiSelect from './CustomMultiSelect/CustomMultiSelect';

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
      render={({ field: { value, onChange, onBlur } }) => (
        <div className={cl.categorySelect}>
          <CustomMultiSelect
            onChange={onChange}
            value={value}
            items={purposeCategories}
            onBlur={onBlur}
            name={name}
            errors={errors}
            placeholder="Категорія (за призначенням):"
          />
          {errors[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}
        </div>
      )}
    />
  );
};
export default CategorySelect;
