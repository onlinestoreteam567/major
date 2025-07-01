import { Controller } from 'react-hook-form';
import ErrorText from '../ErrorText/ErrorText';
import ImagePreview from './ImagePreview/ImagePreview';
import cl from './index.module.scss';

const ImageUpload = ({ name, labelText, control, error }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <div className={cl.imageUpload}>
            <ImagePreview file={value} uploadedImage={value} />
            <label htmlFor={name}>
              {labelText}
              <input
                type="file"
                id={name}
                name={name}
                accept="image/*"
                onChange={(event) => {
                  const files = Array.from(event.target.files);
                  const fileToSet = files.length > 0 ? files[0] : null;
                  onChange(fileToSet);
                }}
              />
              {error && <ErrorText error={error?.message} />}
            </label>
          </div>
        );
      }}
    />
  );
};

export default ImageUpload;
