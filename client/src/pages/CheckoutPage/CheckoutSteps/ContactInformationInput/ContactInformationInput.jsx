import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';

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
      {errors && errors[name] && <Paragraph type="caption">{errors[name].message}</Paragraph>}
    </label>
  );
}
