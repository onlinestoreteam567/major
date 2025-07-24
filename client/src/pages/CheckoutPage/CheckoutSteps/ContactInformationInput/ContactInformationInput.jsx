import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

export function ContactInformationInput({ labelText, placeholder, name, register, errors, disabled, ...rest }) {
  return (
    <label htmlFor={name} className={cl.contactInformationInput}>
      <Heading type="h4"> {labelText}</Heading>

      <input
        id={name}
        {...register(name)}
        type="text"
        {...rest}
        placeholder={placeholder}
        className={errors && errors[name] && cl.error}
        disabled={disabled}
      />
      {errors && errors[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}
    </label>
  );
}
