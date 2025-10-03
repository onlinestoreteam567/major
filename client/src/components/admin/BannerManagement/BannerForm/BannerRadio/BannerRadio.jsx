import cl from './index.module.scss';
import CheckedRadio from '@components/UI/icons/Admin/Radios/CheckedRadio/CheckedRadio';
import UncheckedRadio from '@components/UI/icons/Admin/Radios/UncheckedRadio/UncheckedRadio';
import { Controller } from 'react-hook-form'; // Import Controller

function RadioOption({ id, name, errors, value, labelText, onChange, onBlur, checkedValue, ...rest }) {
  const isChecked = checkedValue === value;

  return (
    <label htmlFor={id} className={`${cl.bannerRadio} ${errors && errors[name] && cl.error}`}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
        onBlur={onBlur}
        {...rest}
      />
      <span className={cl.unchecked}>
        <UncheckedRadio />
      </span>
      <span className={cl.checked}>
        <CheckedRadio />
      </span>
      {labelText}
    </label>
  );
}

export default function BannerRadio({ control, errors, ...rest }) {
  const name = 'left';

  const options = [
    {
      id: 'right',
      value: false,
      labelText: 'Праворуч',
    },
    {
      id: 'left',
      value: true,
      labelText: 'Ліворуч',
    },
  ];

  return (
    <div className={cl.radioGroup}>
      <h2>Розташування фото:</h2>
      <div>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              {options.map((option) => (
                <RadioOption
                  key={option.id}
                  id={option.id}
                  name={field.name}
                  value={option.value}
                  labelText={option.labelText}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  checkedValue={field.value}
                  errors={errors}
                  {...rest}
                />
              ))}
            </>
          )}
        />
      </div>
    </div>
  );
}
