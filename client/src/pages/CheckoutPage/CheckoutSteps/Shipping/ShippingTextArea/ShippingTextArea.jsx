import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';

export function ShippingTextArea({ labelText, placeholder, name, register, ...rest }) {
  return (
    <>
      <label className={cl.shippingTextArea} htmlFor={name}>
        <Paragraph type="body2">{labelText}</Paragraph>

        <textarea placeholder={placeholder} {...register(name)} {...rest} id={name} />
      </label>
    </>
  );
}
