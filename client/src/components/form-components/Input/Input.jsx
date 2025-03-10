import cl from './index.module.scss';

export function Input({ labelText, name, variant, register, errors, ...rest }) {
  return (
    <label htmlFor={name}>
      {labelText}

      <input id={name} className={`${cl.input} ${cl[variant]}`} {...register(name)} {...rest} />

      {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
    </label>
  );
}
