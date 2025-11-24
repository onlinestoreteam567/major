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
import { useDispatch } from 'react-redux';
import { postSupportRequest } from '@redux/popUp/service';
import BtnSubmit from '@components/UI/Button/BtnSubmit';

const QuestionPopUp = ({ setShowMessagePopUp }) => {
  const dispatch = useDispatch();
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

  const handleCloseMessagePopUp = () => setShowMessagePopUp(false);
  const onSubmit = (data) => {
    console.log(data);
    dispatch(postSupportRequest(data));
  };

  console.log('errors + ');
  console.log(errors);

  return (
    <>
      <Overlay handleClose={handleCloseMessagePopUp} />

      <div className={cl.questionPopUp}>
        <ButtonClose onClick={handleCloseMessagePopUp} ariaLabel="ariaLabelMainPopUp" />

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

              <BtnSubmit>{getTranslation('send', 'common')}</BtnSubmit>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuestionPopUp;
