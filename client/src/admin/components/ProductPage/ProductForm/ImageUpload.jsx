import { Controller } from 'react-hook-form';

const ImageUpload = ({ control, name }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <label>
          Фото
          <input
            {...field}
            multiple
            type="file"
            id={name}
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
