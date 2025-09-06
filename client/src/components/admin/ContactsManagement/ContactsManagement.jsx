import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import cl from './index.module.scss';
import ContactsForm from './ContactsForm/ContactsForm';
import { contactSchema } from '@validations/admin/contactSchema';
import AdminFormActions from '@components/admin/AdminFormActions/AdminFormActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  errorContactsEdit,
  loadContacts,
  loadContactsEdit,
  selectContacts,
  selectContactsEdit,
} from '@redux/selectors';
import { fetchContacts } from '@redux/contacts/service';
import { useEffect } from 'react';
import Spinner from '@components/UI/Spinner/Spinner';
import setFormValues from '@utils/setFormValue';
import { contactsEdit } from '@redux/admin/contacts/service';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import { clearEditContactsSlice } from '@redux/admin/contacts/contactsEditSlice';
import AdminMessage from '../AdminMessage/AdminMessage';
import ErrorText from '../ErrorText/ErrorText';

const formValues = [
  'id',
  'telegram',
  'instagram',
  'email',
  'main_phone_number',
  'additional_phone_number',
  'work_schedule_weekdays',
  'work_schedule_weekends',
  'offer_agreement_policy',
  'exchange_and_return_policy',
  'paymant_and_delivery_policy',
  'current_year',
];

const ContactsManagement = () => {
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

  const dispatch = useDispatch();
  const contactsGet = useSelector(selectContacts);
  const isLoadingGet = useSelector(loadContacts);
  const responseEdit = useSelector(selectContactsEdit);
  const isLoadingEdit = useSelector(loadContactsEdit);
  const errorEdit = useSelector(errorContactsEdit);
  const [successEditMessage, showSuccessEditMessage] = useTimedMessage(3000, () => dispatch(clearEditContactsSlice()));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (responseEdit) showSuccessEditMessage('Контакти успішно відредаговані');
  }, [responseEdit]);

  useEffect(() => {
    contactsGet && setFormValues(setValue, contactsGet[0], formValues);
  }, [contactsGet, setValue]);

  const onSubmit = (formData) => {
    const id = getValues().id;
    dispatch(contactsEdit({ formData, id }));
  };
  return isLoadingGet || isLoadingEdit ? (
    <Spinner />
  ) : (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.contactsEdit}>
        <ContactsForm register={register} errors={errors} />
        {errorEdit && <ErrorText error={errorEdit} />}

        <button type="button" onClick={() => console.log(getValues())}>
          awdawdadwdwdawadw
        </button>

        <AdminFormActions
          to="/admin/promocodes"
          errors={errors}
          isLoading={false}
          shortText={'Зберегти'}
          longText={'Зберегти контакти'}
        />
      </form>
      {successEditMessage && <AdminMessage>{successEditMessage}</AdminMessage>}
    </>
  );
};
export default ContactsManagement;
