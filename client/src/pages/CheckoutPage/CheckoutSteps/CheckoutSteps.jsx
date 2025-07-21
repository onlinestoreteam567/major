import { yupResolver } from '@hookform/resolvers/yup';
import ContactInformation from './ContactInformation/ContactInformation';
import cl from './index.module.scss';
import { useForm } from 'react-hook-form';
import { checkoutSchema } from '@validations/checkoutSchema';
import Shipping from './Shipping/Shipping';
import Payment from './Payment/Payment';

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

  return (
    <form onSubmit={handleSubmit} className={cl.checkoutSteps}>
      <ContactInformation setValue={setValue} errors={errors} register={register} />
      <Shipping register={register} errors={errors} />
      <Payment register={register} errors={errors} />
      {/* <button type="button" onClick={() => console.log(getValues())}>
        getValues
      </button> */}
    </form>
  );
};
export default CheckoutSteps;
