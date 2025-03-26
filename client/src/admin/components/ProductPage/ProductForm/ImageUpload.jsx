import { Controller } from 'react-hook-form';

const ImageUpload = ({ control }) => {
  return (
    <Controller
      control={control}
      name="upload_images"
      render={({ field: { value, onChange, ...field } }) => (
        <label>
          Фото
          <input
            {...field}
            multiple
            type="file"
            id="upload_images"
            onChange={(event) => {
              const files = Array.from(event.target.files);
              onChange(files);
            }}
          />
        </label>
      )}
    />
  );
};
export default ImageUpload;
