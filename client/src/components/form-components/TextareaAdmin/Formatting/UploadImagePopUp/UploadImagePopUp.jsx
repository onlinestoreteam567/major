import { useState } from 'react';
import ImageUpload from '../../../../../admin/components/ImageUpload/ImageUpload';
import cl from './index.module.scss'; // Assuming this is for styling, keep it.
import { useDispatch } from 'react-redux';
import { uploadImage } from '@redux/blogs/service';

const UploadImagePopUp = () => {
  const dispatch = useDispatch();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  /**
   * Handles the file selection from the ImageUpload component.
   * This function will trigger the image upload process.
   *
   * @param {File[]} files - An array containing the single File object selected by the user.
   */
  const handleFileChange = async (files) => {
    if (files.length === 0) {
      setUploadError('No file selected.');
      return;
    }

    setIsUploading(true);
    setUploadError(null); // Clear any previous errors
    setUploadSuccess(false); // Reset success state

    try {
      // Create a new FormData instance
      let formData = new FormData();

      // Since only one image is allowed, we take the first file from the array.
      formData.append('upload_image', files[0]); // 'image' should match the name your backend expects for the file.

      // If your handleImageUpload utility expects a specific structure for 'values'
      // (e.g., if it's designed to work with react-hook-form's output),
      // you might need to adapt it or just append the file directly as done above.
      // For instance, if handleImageUpload expects { image: File }, you'd do:
      // formData = handleImageUpload(formData, { image: files[0] }, 'image');

      // Dispatch the upload action
      const resultAction = await dispatch(uploadImage(formData)).unwrap();
      // .unwrap() is used with Redux Toolkit to get the actual payload or throw an error

      if (resultAction) {
        setUploadSuccess(true);
        // You might want to do something with the uploaded image URL here,
        // like passing it back to the parent component or updating an editor.
        console.log('Image uploaded successfully:', resultAction);
      } else {
        // Fallback for cases where the action might not return a payload but succeeded
        setUploadSuccess(true);
        console.log('Image upload initiated successfully, but no specific payload returned.');
      }
    } catch (error) {
      console.error('Failed to upload image:', error);
      // Display a user-friendly error message
      setUploadError(error.message || 'An unknown error occurred during upload.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={cl.uploadImagePopUp}>
      {' '}
      {/* Apply your module CSS class */}
      {/* Removed <form> tag and react-hook-form related props */}
      <ImageUpload
        name="upload_image"
        labelText="Загрузіть фото"
        onFileSelect={handleFileChange}
        disabled={isUploading}
      />
      {isUploading && <p>Загрузка...</p>}
      {uploadError && <p>{uploadError}</p>}
      {uploadSuccess && <p>Фото успішно завантажено!</p>}
    </div>
  );
};

export default UploadImagePopUp;
