import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

export function Textarea({ labelText, errors, name, variant, register, ...rest }) {
  return (
    <>
      <label htmlFor={name}>
        <Heading type="h4">{labelText}</Heading>
      </label>
      <textarea className={`${cl.textarea} ${cl[variant]}`} {...register(name)} {...rest} id={name} />
      {errors && errors[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}
    </>
  );
}
