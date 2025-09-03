import { Input } from '@components/form-components';
import cl from './index.module.scss';
import AdminPartnersMap from './AdminPartnersMap/AdminPartnersMap';
import ValidationErrorMessage from '@components/admin/ValidationErrorMessage/ValidationErrorMessage';

const PartnersForm = ({ register, errors, getValues, watch }) => {
  return (
    <div className={cl.partnerForm}>
      <div className={cl.coordinates}>
        <h2>Координати на карті:</h2>
        <Input
          labelText="Відступ зліва, %"
          name="longitude"
          register={register}
          errors={errors}
          placeholder="0%"
          variant="admin"
        />
        <Input
          labelText="Відступ згори, %"
          name="latitude"
          register={register}
          errors={errors}
          placeholder="0%"
          variant="admin"
        />
      </div>

      <AdminPartnersMap getValues={getValues} watch={watch} />

      <Input
        labelText="Посилання на GoogleMaps:"
        name="google_maps_link"
        register={register}
        errors={errors}
        variant="admin"
        placeholder="link"
      />

      <div className={cl.partnersData}>
        <h2>Дані про партнера:</h2>
        <Input
          labelText="Назва салону (UA):"
          name="name_uk"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
        <Input
          labelText="Назва салону (ENG):"
          name="name_en"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
        <Input
          labelText="Адреса (UA):"
          name="addres_uk"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
        <Input
          labelText="Адреса (ENG):"
          name="addres_en"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
      </div>

      <div className={cl.workSchedule}>
        <h2>Графік роботи:</h2>
        <Input
          labelText="Пн - Пт"
          name="work_schedule_weekdays"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
        <Input
          labelText="Сб - Нд"
          name="work_schedule_weekends"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
      </div>
      {Object.keys(errors).length > 0 && (
        <div className={cl.validationErrorMessageWrapper}>
          <ValidationErrorMessage>
            Неможливо створити/відредагувати партнера — перевірте правильність введення даних.
          </ValidationErrorMessage>
        </div>
      )}
    </div>
  );
};
export default PartnersForm;
