import cl from './index.module.scss';
import { Controller } from 'react-hook-form';

export function TextareaProduct({ control, name, labelText, errors, placeholder }) {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <textarea
            id={name}
            className={`${cl.textarea} ${errors?.[name] ? cl.error : ''}`}
            placeholder={placeholder}
            {...field}
          />
        )}
      />
      {errors?.[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}
    </>
  );
}
