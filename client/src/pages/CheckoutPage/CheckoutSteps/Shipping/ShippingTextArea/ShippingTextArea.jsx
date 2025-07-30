import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export function ShippingTextArea({ labelText, placeholder, name, register, errors, ...rest }) {
  const { getTranslation } = useTranslationNamespace('checkoutPage');

  return (
    <>
      <label className={`${cl.shippingTextArea} ${errors && errors[name] ? cl.error : ''}`} htmlFor={name}>
        <Paragraph type="body2">{labelText}</Paragraph>

        <textarea placeholder={placeholder} {...register(name)} {...rest} id={name} />
        {errors?.[name] && <Paragraph type="caption">{getTranslation(errors[name].message)}</Paragraph>}
      </label>
    </>
  );
}
