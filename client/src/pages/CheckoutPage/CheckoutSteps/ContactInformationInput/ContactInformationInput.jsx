import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export function ContactInformationInput({ labelText, placeholder, name, register, errors, disabled, ...rest }) {
  const { getTranslation } = useTranslationNamespace('checkoutPage');

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
      {errors && errors[name] && <Paragraph type="caption">{getTranslation(errors[name].message)}</Paragraph>}
    </label>
  );
}
