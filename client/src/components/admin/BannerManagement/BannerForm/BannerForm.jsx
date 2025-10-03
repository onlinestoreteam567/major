import BannerProductSelect from './BannerProductSelect/BannerProductSelect';
import cl from './index.module.scss';
import BannerFormInformation from './BannerFormInformation/BannerFormInformation';
import ImageUpload from '@components/admin/ImageUpload/ImageUpload';
import BannerRadio from './BannerRadio/BannerRadio';
import ValidationErrorMessage from '@components/admin/ValidationErrorMessage/ValidationErrorMessage';

const BannerForm = ({ errors, control, watch }) => {
  return (
    <div className={cl.bannerForm}>
      <div className={cl.imageUploadContainer}>
        <BannerFormInformation />
        <ImageUpload labelText="Змінити фото продукту" name="image" control={control} errors={errors} />
      </div>

      <div className={cl.bannerSettingsWrapper}>
        <BannerRadio control={control} errors={errors} />
        <BannerProductSelect control={control} errors={errors} watch={watch} />
      </div>

      <div className={cl.imageUploadContainer}>
        <BannerFormInformation />
        <ImageUpload control={control} name="background_image" labelText="Оберіть фон для банеру" errors={errors} />
      </div>

      {Object.keys(errors).length > 0 && (
        <div className={cl.validationErrorMessageWrapper}>
          <ValidationErrorMessage>
            Неможливо створити банер — перевірте правильність введення даних.
          </ValidationErrorMessage>
        </div>
      )}
    </div>
  );
};
export default BannerForm;
