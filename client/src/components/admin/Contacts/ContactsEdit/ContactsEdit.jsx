import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import cl from './index.module.scss';
import ContactsForm from '../ContactsForm/ContactsForm';
import { contactSchema } from '@validations/admin/contactSchema';
import AdminFormActions from '@components/admin/AdminFormActions/AdminFormActions';

// const formValues = [
//   'telegram',
//   'instagram',
//   'email',
//   'main_phone_number',
//   'secondary_phone_number',
//   'work_schedule_weekdays',
//   'work_schedule_weekend',
//   'copyright',
//   'privacy_policy_url',
// ];

const ContactsEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: 'onSubmit',
  });

  // const dispatch = useDispatch();
  // const errorEdit = useSelector(errorTypeById);
  // const isLoadingEdit = useSelector(loadTypeEdit);
  // const responseEdit = useSelector(responseTypeEdit);
  // const isLoadingGet = useSelector(loadTypeById);
  // const responseGet = useSelector(responseTypeById);
  // const [successEditMessage, showSuccessEditMessage] = useTimedMessage(3000, () => dispatch(clearEditTypeState()));

  // useEffect(() => {
  // Get contacts...
  //   dispatch(getTypeCategoryById(id));
  // }, [dispatch, id]);

  // useEffect(() => {
  // Success message
  //   if (responseEdit) showSuccessEditMessage('Категорія успішно відредагована');
  // }, [responseEdit]);

  // useEffect(() => {
  // Success set form values
  //   responseGet && setFormValues(setValue, responseGet, formValues);
  // }, [responseGet, setValue]);

  // const onSubmit = (formData) => dispatch(editType({ formData, id }));
  const onSubmit = (formData) => console.log('Form submitted with data:', formData);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.contactsEdit}>
        <ContactsForm getValues={getValues} register={register} errors={errors} setValue={setValue} />

        <AdminFormActions
          to="/admin/promocodes"
          errors={errors}
          isLoading={false}
          shortText={'Зберегти'}
          longText={'Зберегти контакти'}
        />
      </form>
      {/* {successEditMessage && <AdminMessage>{successEditMessage}</AdminMessage>} */}
    </>
  );
};
export default ContactsEdit;
