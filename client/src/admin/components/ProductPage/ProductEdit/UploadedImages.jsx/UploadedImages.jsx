import cl from './index.module.scss';

const UploadedImages = ({ images, setValue, getValues }) => {
  const name = 'remove_images';
  const handleDelete = (image) => setValue(name, getValues(name) ? [...getValues(name), image.id] : [image.id]);

  return (
    <ul className={cl.images}>
      Images
      {images.map((image, index) => (
        <li key={index}>
          <img src={image.image} alt={`Image ${index}`} />
          <button type="button" onClick={() => handleDelete(image)}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};
export default UploadedImages;
