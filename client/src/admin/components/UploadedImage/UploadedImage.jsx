import cl from './index.module.scss';

const UploadedImage = ({ image, labelText = 'Завантажене зображення:' }) => {
  return (
    <>
      <span>{labelText}</span>
      <img src={image} className={cl.uploadedImage} />
    </>
  );
};

export default UploadedImage;
