import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputName from './InputName';
import StarsCheskBox from './StarsCheckBox';
import BtnSubmit from '@components/UI/Button/BtnSubmit';
import InputPhone from './InputPhone';
import InputTextArea from './InputTextArea';

const ReviewPopUp = ({ card }) => {
  const schema = yup.object({
    user_name: yup.string().required("поле обов'язкове"),
    phone: yup.string().required("поле обов'язкове"),
    review_text: yup.string().required("поле обов'язкове"),
    stars: yup.array().of(yup.boolean()).default([false, false, false, false, false]).required("поле обов'язкове"),
  });

  const date = new Date();
  const dateNow = date.toISOString();
  const dateReview = dateNow.slice(0, 10);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newReview = {
      product_id: card.id,
      product_name: card.name,
      review_text: data.review_text,
      user_name: data.user_name,
      data: dateReview,
      stars: data.stars,
    };

    console.log(newReview);
  };
  const phoneUser = register('phone');
  return (
    <div className={cl.messagePopUp} onClick={(e) => e.stopPropagation()}>
      <Heading type="h3">Залиште відгук про наш товар</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
        <InputName
          label="Ім’я та прізвище"
          name="user_name"
          placeholder="Ім’я та прізвище"
          register={register}
          errors={errors}
        />
        <InputPhone
          label="Номер телефону"
          name={phoneUser.name}
          onChange={phoneUser.onChange}
          inputRef={phoneUser.ref}
          errors={phoneUser.errors}
        />
        <div className={cl.wrapRating}>
          <p>
            Оцініть товар <span>*</span>
          </p>
          <Controller
            control={control}
            name="stars"
            render={({ field: { onChange, value } }) => (
              <StarsCheskBox onChange={onChange} name="stars" value={value} />
            )}
          />
        </div>
        <InputTextArea
          label="Напишіть коротенький відгук"
          name="review_text"
          placeholder="Відгук про товар"
          register={register}
          errors={errors}
        />
        <div className={cl.btnWrap}>
          <BtnSubmit type="submit" variant="secondary">
            Залишити повідомлення
          </BtnSubmit>
        </div>
      </form>
    </div>
  );
};

export default ReviewPopUp;
