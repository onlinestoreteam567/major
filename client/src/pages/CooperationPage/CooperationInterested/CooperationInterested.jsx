import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { Input, PhoneNumberInput } from '@components/form-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cooperationSchema } from '@validations/cooperationSchema';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import BtnSubmit from '@components/UI/Button/BtnSubmit';

const CooperationInterested = () => {
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
    <div className={cl.cooperationInterested}>
      <Heading type="h2">Зацікавлені?</Heading>
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
        <BtnSubmit>{getTranslation('Стати партнером')}</BtnSubmit>
      </form>
    </div>
  );
};
export default CooperationInterested;
