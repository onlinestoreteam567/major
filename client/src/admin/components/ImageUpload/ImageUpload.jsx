import ErrorText from '../ErrorText/ErrorText';

const ImageUpload = ({ name, labelText, onFileSelect, error, disabled = false }) => {
  return (
    <label htmlFor={name}>
      {labelText}
      <input
        type="file"
        id={name}
        name={name}
        accept="image/*"
        onChange={(event) => {
          const files = Array.from(event.target.files);
          onFileSelect(files);
        }}
        disabled={disabled}
      />
      {error && <ErrorText error={error} />}
    </label>
  );
};

export default ImageUpload;
