import cl from './index.module.scss';

export function Input({ name, variant, register, ...rest }) {
  return <input className={`${cl.input} ${cl[variant]}`} {...register(name)} {...rest} />;
}
