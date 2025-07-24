import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import cl from './index.module.scss';

export default function PaymentCheckbox({ name, register, errors, ...rest }) {
  return (
    <label htmlFor={name} className={cl.paymentCheckbox}>
      <div>
        <input id={name} className={cl.checkbox} type="checkbox" {...register(name)} {...rest} defaultChecked />
        <span />Я погоджуюсь на обробку персональних даних
      </div>
      {errors?.[name] && <Paragraph type="caption">{errors[name].message}</Paragraph>}
    </label>
  );
}
