const ImageUpload = ({ name, labelText, onFileSelect, disabled = false }) => {
  return (
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2 cursor-pointer">
      {labelText}
      <input
        type="file"
        id={name}
        name={name}
        // Removed 'multiple' attribute to allow only one file selection
        accept="image/*" // Suggests image files to the user
        onChange={(event) => {
          // Convert FileList to an array and pass it to the onFileSelect callback
          // Since 'multiple' is removed, event.target.files will contain at most one file.
          const files = Array.from(event.target.files);
          onFileSelect(files);
        }}
        disabled={disabled}
        className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
      />
    </label>
  );
};

export default ImageUpload;
