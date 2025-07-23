import { useRef, useEffect } from 'react';
import cl from './InputDate.module.scss';

export function InputDate({ labelText, placeholder, name, register, errors, disabled, variant = 'admin', ...rest }) {
  const hasError = errors?.[name];
  const inputRef = useRef(null);

  const { ref, ...restRegister } = register(name);

  useEffect(() => {
    if (typeof ref === 'function') {
      ref(inputRef.current);
    }
  }, [ref]);

  const openCalendar = () => {
    if (inputRef.current) {
      if (typeof inputRef.current.showPicker === 'function') {
        inputRef.current.showPicker();
      } else {
        inputRef.current.focus();
      }
    }
  };

  return (
    <label htmlFor={name} className={`${cl.label} ${cl[variant]}`}>
      {labelText}
      <div className={cl.inputDateGroup}>
        <input
          id={name}
          {...restRegister}
          type="date"
          placeholder={placeholder}
          ref={inputRef}
          className={`${cl.inputDate} ${hasError ? cl.error : ''}`}
          disabled={disabled}
          {...rest}
        />
        <div className={cl.iconWrap} onClick={openCalendar}>
          <img src="/svg/admin/calendar.svg" alt="calendar icon" />
        </div>
      </div>
    </label>
  );
}
