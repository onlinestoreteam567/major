import cl from './index.module.scss';

export function Textarea({ labelText, errors, name, variant, register, ...rest }) {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <textarea className={`${cl.textarea} ${cl[variant]}`} {...register(name)} {...rest} id={name} />
      {errors[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}
    </>
  );
}
