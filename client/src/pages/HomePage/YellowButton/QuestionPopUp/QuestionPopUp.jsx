import cl from './index.module.scss';
import Overlay from '@UI/Overlay/Overlay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { needHelpSchema } from '@validations/needHelpSchema';
import { Input, PhoneNumberInput, Textarea } from '@components/form-components';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import Heading from '@components/UI/Texts/Heading/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { postSupportRequest } from '@redux/popUp/service';
import BtnSubmit from '@components/UI/Button/BtnSubmit';
import { errorCreateSupportRequest, loadCreateSupportRequest, responseCreateSupportRequest } from '@redux/selectors';
import { clearCreateSupportRequest } from '@redux/popUp/createSupportRequestSlice';
import { useEffect } from 'react';
import Button from '@components/UI/Button/Button';

const QuestionPopUp = ({ setShowMessagePopUp }) => {
  const { getTranslation } = useTranslationNamespace('yellowButton');
  const {
    setValue,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(needHelpSchema),
  });
  const dispatch = useDispatch();
  const requestCreated = useSelector(responseCreateSupportRequest);
  const loadRequestCreation = useSelector(loadCreateSupportRequest);
  const errorRequestCreation = useSelector(errorCreateSupportRequest);
  console.log(errorRequestCreation);

  const handleCloseMessagePopUp = () => setShowMessagePopUp(false);
  const onSubmit = (data) => dispatch(postSupportRequest(data));

  useEffect(() => {
    if (requestCreated) {
      return () => {
        dispatch(clearCreateSupportRequest());
      };
    }
  });

  return (
    <>
      <Overlay handleClose={handleCloseMessagePopUp} />

      <div className={cl.questionPopUp}>
        <ButtonClose onClick={handleCloseMessagePopUp} ariaLabel="ariaLabelMainPopUp" />

        {requestCreated || errorRequestCreation ? (
          <div className={cl.successMessage}>
            <Heading type="h2">
              {requestCreated && getTranslation('requestCreated')}
              {errorRequestCreation && getTranslation('errorRequestCreation')}
            </Heading>

            {errorRequestCreation && (
              <Button onClick={() => dispatch(clearCreateSupportRequest())}>{getTranslation('tryAgain')}</Button>
            )}
          </div>
        ) : (
          <div className={cl.overflowWrap}>
            <div>
              <Heading type="h2">{getTranslation('subtitle')}</Heading>
              <Paragraph type="body2">{getTranslation('heading')}</Paragraph>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  labelText={getTranslation('yourName')}
                  name="name"
                  variant="popUp"
                  register={register}
                  errors={errors}
                />

                <PhoneNumberInput
                  setValue={setValue}
                  variant="popUp"
                  register={'phone'}
                  name="phone"
                  labelText={getTranslation('phoneNumber')}
                  errors={errors}
                  getValues={getValues}
                />
              </div>

              <div>
                <Textarea
                  labelText={getTranslation('textAreaTitle')}
                  name="question"
                  register={register}
                  variant={'popUp'}
                  errors={errors}
                />

                <BtnSubmit disabled={loadRequestCreation}>{getTranslation('send', 'common')}</BtnSubmit>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default QuestionPopUp;
