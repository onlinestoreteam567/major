import cl from './index.module.scss';

export default function PaymentCheckbox({ name, register, ...rest }) {
  return (
    <label htmlFor={name} className={cl.paymentCheckbox}>
      <span />
      Я погоджуюсь на обробку персональних даних
      <input id={name} className={cl.checkbox} type="checkbox" {...register(name)} {...rest} />
    </label>
  );
}
