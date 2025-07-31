import { Controller } from 'react-hook-form';
import cl from './index.module.scss';
import { useRef } from 'react';

export function InputDate({ labelText, placeholder, name, control, errors, disabled, ...rest }) {
  const hasError = errors?.[name];
  const inputRef = useRef(null);

  const openCalendar = () => {
    if (inputRef.current) {
      if (typeof inputRef.current.showPicker === 'function') {
        inputRef.current.showPicker();
      } else {
        inputRef.current.focus();
      }
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    if (!year || !month || !day) return dateStr;
    return `${day}.${month}.${year}`;
  };

  return (
    <label htmlFor={name} className={cl.label}>
      {labelText}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div>
            <input
              id={name}
              {...field}
              type="date"
              placeholder={placeholder}
              ref={(el) => {
                field.ref(el);
                inputRef.current = el;
              }}
              className={`${cl.inputDate} ${hasError ? cl.error : ''}`}
              disabled={disabled}
              value={field.value ?? ''}
              {...rest}
            />
            <div className={cl.displayValue}>{field.value ? formatDate(field.value) : placeholder}</div>
            <div className={cl.iconWrap} onClick={openCalendar}>
              <img src="/svg/admin/calendar.svg" alt="calendar icon" />
            </div>
          </div>
        )}
      />
    </label>
  );
}
