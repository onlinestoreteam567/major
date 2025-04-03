import cl from './index.module.scss';
import Overlay from '@UI/Overlay/Overlay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { needHelpSchema } from '@validations/needHelpSchema';
import { Input, Textarea } from '@components/form-components';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { addReviewById } from '@redux/products/service';
import { useDispatch } from 'react-redux';
import StarsCheckBox from './StarsCheckBox';

const ReviewPopUp = ({ id, setIsShowReviewPopUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(needHelpSchema),
  });

  const dispatch = useDispatch();
  const { getTranslation } = useTranslationNamespace('reviewPopUp');

  const handleCloseReviewPopUp = () => setIsShowReviewPopUp(false);
  const onSubmit = (formData) => dispatch(addReviewById({ formData, id }));

  return (
    <>
      <Overlay handleClose={handleCloseReviewPopUp} />

      <div className={cl.messagePopUp}>
        <ButtonClose onClick={handleCloseReviewPopUp} />

        <div className={cl.overflowWrap}>
          <div>
            <Paragraph type="body2">{getTranslation('heading')}</Paragraph>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                labelText={getTranslation('name')}
                name="user_name"
                variant="popUp"
                register={register}
                errors={errors}
              />
            </div>

            <div className={cl.wrapRating}>
              <p>
                Оцініть товар <span>*</span>
              </p>

              <StarsCheckBox control={control} name="rating" />
            </div>

            <div>
              <Textarea
                labelText={getTranslation('textAreaTitle')}
                name="review_text"
                register={register}
                variant={'popUp'}
                errors={errors}
              />

              <Button submit={true}>{getTranslation('buttonText')}</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewPopUp;
