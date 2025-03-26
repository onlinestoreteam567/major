import cl from './index.module.scss';

const UploadedImage = ({ image }) => {
  return (
    <>
      <span>Завантажене зображення:</span>
      <img src={image} className={cl.uploadedImage} />
    </>
  );
};

export default UploadedImage;
