import { yupResolver } from '@hookform/resolvers/yup';
import ContactInformation from './ContactInformation/ContactInformation';
import cl from './index.module.scss';
import { useForm } from 'react-hook-form';
import { checkoutSchema } from '@validations/checkoutSchema';
import Shipping from './Shipping/Shipping';
import Payment from './Payment/Payment';
import { useState } from 'react';
import { createInvoice } from '@redux/checkout/service';
import { useDispatch } from 'react-redux';

const CheckoutSteps = ({ totalToPaid }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
    mode: 'onSubmit',
    defaultValues: { delivery_method: 'nova_poshta' },
  });

  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(1);

  const getFormValues = () => {
    let formValues = getValues();
    delete formValues.checkbox;

    if (formValues.comment === '') {
      delete formValues.comment;
    }

    if (formValues.telegram_name === '') {
      delete formValues.telegram_name;
    } else if (!formValues.telegram_name.trim().startsWith('@')) {
      formValues = { ...formValues, telegram_name: '@' + formValues.telegram_name.trim() };
    }

    if (!formValues.settlement) {
      delete formValues.settlement;
    }

    if (formValues.warehouse === '') {
      delete formValues.warehouse;
    }

    if (formValues.delivery_method === 'self_pickup') {
      delete formValues.warehouse;
      delete formValues.settlement;
    }

    formValues = { ...formValues, full_amount: totalToPaid };

    if (formValues.payment_option === 'partial') {
      formValues = { ...formValues, amount: 100 };
    } else if (formValues.payment_option === 'full') {
      formValues = { ...formValues, amount: totalToPaid };
    }

    dispatch(createInvoice(formValues));
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className={cl.checkoutSteps}>
      <ContactInformation
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        setValue={setValue}
        errors={errors}
        register={register}
        trigger={trigger}
        getValues={getValues}
      />
      <Shipping
        control={control}
        trigger={trigger}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        register={register}
        errors={errors}
        getValues={getValues}
        setValue={setValue}
      />
      <Payment
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        register={register}
        errors={errors}
        trigger={trigger}
        getValues={getValues}
        watch={watch}
      />
      {activeStep === 4 && <p style={{ color: 'limeGreen', fontSize: '30px' }}>Всьо, форма пройдена, давай гроші</p>}

      <button type="button" onClick={() => getFormValues()}>
        Клік: Вивести в консоль браузеру значення форми
      </button>
    </form>
  );
};
export default CheckoutSteps;
