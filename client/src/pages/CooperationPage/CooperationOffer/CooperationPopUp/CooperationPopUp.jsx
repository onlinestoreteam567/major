import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import cl from './index.module.scss';
import { Input, PhoneNumberInput } from '@components/form-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cooperationSchema } from '@validations/cooperationSchema';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import BtnSubmit from '@components/UI/Button/BtnSubmit';
import Overlay from '@components/UI/Overlay/Overlay';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';

const CooperationPopUp = ({ setIsShowCooperationPopUp }) => {
  const { getTranslation } = useTranslationNamespace('cooperation');
  const {
    setValue,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(cooperationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Overlay handleClose={() => setIsShowCooperationPopUp(false)} />
      <div className={cl.cooperationPopUp}>
        <ButtonClose onClick={() => setIsShowCooperationPopUp(false)} />

        <Paragraph type="body1">Залишіть свої контакти і ми з вами зв’яжемось для обговорення умов.</Paragraph>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelText={'Ім’я:'}
            placeholder="Ім’я"
            name="fullName"
            variant="popUp"
            register={register}
            errors={errors}
          />
          <PhoneNumberInput
            setValue={setValue}
            variant="popUp"
            register={'phone'}
            name="phone"
            labelText={'Телефон:'}
            placeholder={'+38 (097) 123 45 67'}
            errors={errors}
            getValues={getValues}
          />
          <BtnSubmit>{getTranslation('Подати заявку')}</BtnSubmit>
        </form>
      </div>
    </>
  );
};
export default CooperationPopUp;
