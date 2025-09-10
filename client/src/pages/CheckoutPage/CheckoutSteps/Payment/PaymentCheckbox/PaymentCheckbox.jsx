import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function PaymentCheckbox({ name, register, errors, ...rest }) {
  const { getTranslation } = useTranslationNamespace('checkoutPage');

  return (
    <label htmlFor={name} className={cl.paymentCheckbox}>
      <div className={errors?.[name] ? cl.error : ''}>
        <input id={name} className={cl.checkbox} type="checkbox" {...register(name)} {...rest} defaultChecked />
        <span />
        {getTranslation('paymentCheckbox')}
      </div>
      {errors?.[name] && <Paragraph type="caption">{getTranslation(errors[name].message)}</Paragraph>}
    </label>
  );
}
