import { yupResolver } from '@hookform/resolvers/yup';
import ContactInformation from './ContactInformation/ContactInformation';
import cl from './index.module.scss';
import { useForm } from 'react-hook-form';
import { checkoutSchema } from '@validations/checkoutSchema';
import Shipping from './Shipping/Shipping';
import Payment from './Payment/Payment';
import { useState } from 'react';
import useFormValuesProcessor from './useFormValues';

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

  const [activeStep, setActiveStep] = useState(1);

  const processFormValues = useFormValuesProcessor();
  const onSubmit = (data) => {
    processFormValues({ data, totalToPaid });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.checkoutSteps}>
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
      <Payment activeStep={activeStep} register={register} errors={errors} watch={watch} />
    </form>
  );
};
export default CheckoutSteps;
