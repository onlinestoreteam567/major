import { yupResolver } from '@hookform/resolvers/yup';
import ContactInformation from './ContactInformation/ContactInformation';
import cl from './index.module.scss';
import { useForm } from 'react-hook-form';
import { checkoutSchema } from '@validations/checkoutSchema';
import Shipping from './Shipping/Shipping';
import Payment from './Payment/Payment';
import { useState } from 'react';

const CheckoutSteps = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
    mode: 'onSubmit',
  });

  const [activeStep, setActiveStep] = useState(1);

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
      />
      {activeStep === 4 && <p style={{ color: 'limeGreen', fontSize: '30px' }}>Всьо, форма пройдена, давай гроші</p>}

      <button type="button" onClick={() => console.log(getValues())}>
        Клік: Вивести в консоль браузеру значення форми
      </button>
    </form>
  );
};
export default CheckoutSteps;
