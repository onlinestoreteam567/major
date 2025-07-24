import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';

export function ShippingTextArea({ labelText, placeholder, name, register, errors, ...rest }) {
  return (
    <>
      <label className={`${cl.shippingTextArea} ${errors && errors[name] ? cl.error : ''}`} htmlFor={name}>
        <Paragraph type="body2">{labelText}</Paragraph>

        <textarea placeholder={placeholder} {...register(name)} {...rest} id={name} />
        {errors && errors[name] && <Paragraph type="caption">{errors[name].message}</Paragraph>}
      </label>
    </>
  );
}
