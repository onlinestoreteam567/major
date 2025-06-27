import { Input, TextareaAdmin } from '@components/form-components';
import CategorySelect from './CategorySelect/CategorySelect';
import TypeSelect from './TypeSelect/TypeSelect';
import ImageUpload from './ImageUpload/ImageUpload';
import ResponsiveTextareas from '@components/form-components/ResponsiveTextareas/ResponsiveTextareas';
import AdminCheckBox from '@components/form-components/Checkbox/AdminCheckbox/Checkbox';
import { useEffect, useState } from 'react';
import AdminMessage from '../../AdminMessage/AdminMessage';
import cl from './index.module.scss';

const ProductForm = ({ register, errors, control, resetImagesTrigger, uploadedImages, setValue, getValues }) => {
  const [messageText, setMessageText] = useState(null);

  useEffect(() => {
    if (messageText) {
      const timer = setTimeout(() => {
        setMessageText('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [messageText]);
  return (
    <>
      <ImageUpload
        control={control}
        name="upload_images"
        errors={errors}
        resetImagesTrigger={resetImagesTrigger}
        setMessageText={() => setMessageText('Фото успішно додано')}
        uploadedImages={uploadedImages}
        setValue={setValue}
        getValues={getValues}
      />
      <div className={cl.productBasicInfo}>
        <Input
          placeholder="example"
          labelText="Назва (UA):"
          name="product_name_uk"
          register={register}
          errors={errors}
          variant="admin"
        />
        <Input
          placeholder="example"
          labelText="Назва (ENG):"
          name="product_name_en"
          register={register}
          errors={errors}
          variant="admin"
        />
        <Input
          placeholder="example"
          labelText="Артикул:"
          name="article"
          register={register}
          errors={errors}
          variant="admin"
        />
      </div>

      <div className={cl.checkboxes}>
        <AdminCheckBox labelText="В наявності" name="available" register={register} />
        <AdminCheckBox labelText="Новинка" name="is_new" register={register} />
        <AdminCheckBox labelText="Хіт продажу" name="is_best_seller" register={register} />
      </div>
      <div className={cl.productNumericalInputs}>
        <Input
          placeholder="0"
          variant="admin"
          type="number"
          labelText="Ціна (грн):"
          name="price"
          register={register}
          errors={errors}
        />
        <Input
          placeholder="0"
          variant="admin"
          type="number"
          labelText="Знижка(%):"
          name="discount"
          register={register}
          errors={errors}
        />
        <Input
          placeholder="0"
          variant="admin"
          type="number"
          labelText="Ціна зі знижкою:"
          name="discounted_price"
          register={register}
          errors={errors}
          readOnly
        />
        <Input
          placeholder="0"
          type="number"
          labelText="Об’єм(ml):"
          name="volume_ml"
          register={register}
          errors={errors}
          variant="admin"
        />
      </div>
      <div className={cl.selects}>
        <CategorySelect control={control} errors={errors} />
        <TypeSelect control={control} errors={errors} />
      </div>

      <ResponsiveTextareas register={register} errors={errors} control={control} />
      <div className={cl.seoInputs}>
        <Input
          placeholder="example"
          labelText="Мета-тег Title (UA):"
          name="1"
          register={register}
          errors={errors}
          variant="admin"
        />
        <Input
          placeholder="example"
          labelText="Мета-тег Title (ENG):"
          name="2"
          register={register}
          errors={errors}
          variant="admin"
        />
        <TextareaAdmin
          placeholder="example"
          labelText="Мета-тег Description (UA):"
          name="3"
          errors={errors}
          control={control}
          variant="admin"
        />
        <TextareaAdmin
          placeholder="example"
          labelText="Мета-тег Description (ENG):"
          name="4"
          control={control}
          errors={errors}
          variant="admin"
        />
      </div>
      {messageText && <AdminMessage>{messageText}</AdminMessage>}
    </>
  );
};
export default ProductForm;
