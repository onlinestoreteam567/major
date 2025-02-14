import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputName from './InputName';
import BtnSubmit from '@components/UI/Button/BtnSubmit';
import InputPhone from './InputPhone';
import InputTextArea from './InputTextArea';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Subtitle from '@components/UI/Texts/Subtitle/Subtitle';

const schema = yup.object({
  user_name: yup.string().required("поле обов'язкове"),
  phone: yup.string().required("поле обов'язкове"),
  question: yup.string().required("поле обов'язкове"),
});

export default function HelperPopUp({ popUpData }) {
  const { getTranslation } = useTranslationNamespace('yellowButton');
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={cl.messagePopUp} onClick={(e) => e.stopPropagation()}>
      <Subtitle>{getTranslation(popUpData.subtitle)}</Subtitle>
      <Heading type="h3">{getTranslation(popUpData.heading)}</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
        <InputName
          label={getTranslation('nameAndSurname')}
          name="user_name"
          placeholder={getTranslation('nameAndSurname')}
          register={register}
          errors={errors}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <InputPhone
              label={getTranslation('phoneNumber')}
              onChange={onChange}
              name="phone"
              value={value}
              errors={errors}
            />
          )}
        />
        <InputTextArea
          label={getTranslation(popUpData.textAreaTitle)}
          name="question"
          placeholder={getTranslation(popUpData.textAreaPlaceholder)}
          register={register}
          errors={errors}
        />
        <div className={cl.btnWrap}>
          <BtnSubmit type="submit" variant="secondary">
            {getTranslation(popUpData.buttonText)}
          </BtnSubmit>
        </div>
      </form>
    </div>
  );
}
