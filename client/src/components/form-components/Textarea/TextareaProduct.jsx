import cl from './index.module.scss';

export function TextareaProduct({ labelText, errors, name, register, ...rest }) {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <textarea className={cl.textarea} {...register(name)} {...rest} id={name} />
      {errors && errors[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}
    </>
  );
}
