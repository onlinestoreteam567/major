import cl from './index.module.scss';

export function Input({ labelText, name, variant, register, ...rest }) {
  return (
    <label htmlFor={name}>
      {labelText}

      <input id={name} className={`${cl.input} ${cl[variant]}`} {...register(name)} {...rest} />
    </label>
  );
}
