import cl from './index.module.scss';
import { Controller } from 'react-hook-form';

export function TextareaAdmin({ control, name, labelText, errors, placeholder }) {
  return (
    <label htmlFor={name} className={cl.textareaAdmin}>
      <span>{labelText}</span>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <textarea id={name} className={`${errors?.[name] ? cl.error : ''}`} placeholder={placeholder} {...field} />
        )}
      />
    </label>
  );
}
