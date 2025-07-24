import cl from './index.module.scss';

export default function PaymentCheckbox({ name, register, ...rest }) {
  return (
    <label htmlFor={name} className={cl.paymentCheckbox}>
      <input id={name} className={cl.checkbox} type="checkbox" {...register(name)} {...rest} defaultChecked />
      <span />Я погоджуюсь на обробку персональних даних
    </label>
  );
}
