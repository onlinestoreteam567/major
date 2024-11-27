import cl from './index.module.scss';

export function Textarea({ name, variant, register, ...rest }) {
  return <textarea className={`${cl.textarea} ${cl[variant]}`} {...register(name)} {...rest} />;
}
