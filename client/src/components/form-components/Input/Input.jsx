import cl from './index.module.scss';
import { LuCalendarDays } from 'react-icons/lu';

export function Input({ labelText, placeholder, type = 'text', name, variant, register, errors, disabled, ...rest }) {
  const isDate = type === 'date';
  const hasError = errors?.[name];
  
  return (
    <label htmlFor={name} className={`${cl.label} ${cl[variant]}`}>
      {labelText}

      {isDate ? (
        <div className={cl.inputDateGroup}>
          <input
            id={name}
            {...register(name)}
            type="date"
            placeholder={placeholder}
            className={`${cl.inputDate} ${hasError ? cl.error : ''}`}
            disabled={disabled}
            {...rest}
          />
          <div className={cl.iconWrap}>
            <LuCalendarDays />
          </div>
        </div>
      ) : (
        <input
          id={name}
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className={`${cl.input} ${hasError ? cl.error : ''}`}
          disabled={disabled}
          {...rest}
        />
      )}
    </label>
  );
}
