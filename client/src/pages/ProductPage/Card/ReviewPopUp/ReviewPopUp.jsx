import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import { Controller, useForm } from 'react-hook-form';
import StarsCheskBox from './StarsCheckBox';
import BtnSubmit from '@components/UI/Button/BtnSubmit';
import { useDispatch, useSelector } from 'react-redux';
import { addReviewById } from '@redux/products/service';
import { Input, Textarea } from '@components/form-components';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Overlay from '@components/UI/Overlay/Overlay';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { responseAddReview } from '@redux/selectors';
import { resetAddReviewState } from '@redux/reviews/addReviewReducer';
import { useEffect } from 'react';

const ReviewPopUp = ({ card, closeModal }) => {
  const schema = yup.object({
    user_name: yup.string(),
    review_text: yup.string().required("поле обов'язкове"),
    stars: yup.number().min(0).max(5).required("поле обов'язкове"),
  });
  const dispatch = useDispatch();
  const { getTranslation } = useTranslationNamespace('reviewPopUp');
  const response = useSelector(responseAddReview);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const id = card.id;

  const onSubmit = (data) => {
    const newReview = {
      ...(data.user_name && { user_name: data.user_name }),
      review_text: data.review_text,
      rating: data.stars,
    };

    dispatch(addReviewById({ id, newReview }));
  };

  useEffect(() => {
    if (response) {
      return () => {
        dispatch(resetAddReviewState());
      };
    }
  });

  return (
    <>
      <Overlay handleClose={closeModal} />
      <div className={cl.reviewPopUp} onClick={(e) => e.stopPropagation()}>
        <ButtonClose onClick={closeModal} ariaLabel="ariaLabelMainPopUp" />

        {!response ? (
          <div className={cl.overflowWrap}>
            <Heading type="h3">{getTranslation('leaveAReviewTitle')}</Heading>
            <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
              <Input
                labelText={getTranslation('yourName')}
                name="user_name"
                variant="popUp"
                register={register}
                errors={errors}
              />

              <div className={cl.wrapRating}>
                <Heading type="h4">{getTranslation('rateTheProduct')}</Heading>
                <Controller
                  control={control}
                  name="stars"
                  render={({ field: { onChange, value } }) => (
                    <StarsCheskBox onChange={onChange} name="stars" value={value} />
                  )}
                />
              </div>

              <Textarea
                labelText={getTranslation('writeShortReview')}
                name="review_text"
                register={register}
                variant={'popUp'}
                errors={errors}
              />

              <BtnSubmit>{getTranslation('send', 'common')}</BtnSubmit>
            </form>
          </div>
        ) : (
          <div className={cl.successMessage}>
            <Heading type="h2">Дякуємо за Ваш відгук!</Heading>
          </div>
        )}
      </div>
    </>
  );
};

export default ReviewPopUp;
