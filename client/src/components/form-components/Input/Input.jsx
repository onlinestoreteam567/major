import cl from './index.module.scss';

export function Input({ labelText, placeholder, type = 'text', name, variant, register, errors, disabled, ...rest }) {
  return (
    <label htmlFor={name} className={`${cl.label} ${cl[variant]}`}>
      {labelText}

      <input
        id={name}
        {...register(name)}
        type={type}
        {...rest}
        placeholder={placeholder}
        className={errors && errors[name] && cl.error}
        disabled={disabled}
      />
    </label>
  );
}