import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

export function Input({ labelText, type = 'text', name, variant, register, errors, ...rest }) {
  return (
    <label htmlFor={name}>
      <Heading type="h4">{labelText}</Heading>

      <input id={name} className={`${cl.input} ${cl[variant]}`} {...register(name)} type={type} {...rest} />

      {errors && errors[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}
    </label>
  );
}
