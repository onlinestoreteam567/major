import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputName from './InputName';
import StarsCheskBox from './StarsCheckBox';
import BtnSubmit from '@components/UI/Button/BtnSubmit';
import InputTextArea from './InputTextArea';
import { useDispatch } from 'react-redux';
import { addReviewById } from '@redux/products/service';

const ReviewPopUp = ({ card }) => {
  const schema = yup.object({
    user_name: yup.string().required("поле обов'язкове"),
    review_text: yup.string().required("поле обов'язкове"),
    stars: yup.number().min(0).max(5).required("поле обов'язкове"),
  });

  // const date = new Date();
  // const dateNow = date.toISOString();
  // const dateReview = dateNow.slice(0, 10);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const id = card.id;

  const onSubmit = (data) => {
    const newReview = {
      review_text: data.review_text,
      user_name: data.user_name,
      rating: data.stars,
    };
    dispatch(addReviewById({ id, newReview }));
  };

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
