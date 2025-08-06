import AdminMessage from '@components/admin/AdminMessage/AdminMessage';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import { Controller } from 'react-hook-form';
import ImagePreview from './ImagePreview/ImagePreview';
import cl from './index.module.scss';

const ImageUpload = ({ name, labelText, control, errors }) => {
  const [messageText, showMessageText] = useTimedMessage();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <div className={cl.imageUpload}>
            <ImagePreview file={value} uploadedImage={value} errors={errors} name={name} />
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
                  showMessageText('Фото успішно додано');
                }}
              />
            </label>
            {messageText && <AdminMessage>{messageText}</AdminMessage>}
          </div>
        );
      }}
    />
  );
};

export default ImageUpload;
