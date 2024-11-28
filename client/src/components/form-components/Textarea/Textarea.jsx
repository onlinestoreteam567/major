import cl from './index.module.scss';

export function Textarea({ labelText, name, variant, register, ...rest }) {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <textarea className={`${cl.textarea} ${cl[variant]}`} {...register(name)} {...rest} id={name} />
    </>
  );
}
