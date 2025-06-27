import ImageUpload from '../../../../../admin/components/ImageUpload/ImageUpload';
import cl from './index.module.scss'; // Assuming this is for styling, keep it.
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '@redux/blogs/service';
import { errorUploadImage, loadUploadImage, selectUploadImage } from '@redux/selectors';
import { useCallback, useEffect } from 'react';
import { clearUploadedImage } from '@redux/blogs/uploadImageSlice';

const UploadImagePopUp = ({ editor }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadUploadImage);
  const uploadedImage = useSelector(selectUploadImage);
  const error = useSelector(errorUploadImage);

  const addImage = useCallback(
    (url) => {
      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    },
    [editor]
  );

  useEffect(() => {
    if (uploadedImage) {
      addImage(uploadedImage);
      dispatch(clearUploadedImage());
    }
  }, [dispatch, uploadedImage, addImage]);

  const handleFileChange = (files) => {
    let formData = new FormData();
    formData.append('upload_image', files[0]);
    dispatch(uploadImage(formData));
  };

  return (
    <div className={cl.uploadImagePopUp}>
      <ImageUpload
        name="upload_image"
        labelText="Загрузіть фото"
        onFileSelect={handleFileChange}
        disabled={isLoading}
        error={error}
      />
    </div>
  );
};

export default UploadImagePopUp;
