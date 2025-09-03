import cl from './index.module.scss';
import { Controller } from 'react-hook-form';

export function ProductDetailsTextarea({ control, name, labelText, errors, placeholder }) {
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
    </>
  );
}
