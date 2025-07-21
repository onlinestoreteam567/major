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
      />
      <Shipping activeStep={activeStep} setActiveStep={setActiveStep} register={register} errors={errors} />
      <Payment activeStep={activeStep} register={register} errors={errors} />

      {/* <button type="button" onClick={() => console.log(getValues())}>
        getValues
      </button> */}
    </form>
  );
};
export default CheckoutSteps;
