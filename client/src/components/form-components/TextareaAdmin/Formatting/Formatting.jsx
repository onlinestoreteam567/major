import { useState } from 'react';
import UploadImagePopUp from './UploadImagePopUp/UploadImagePopUp';
import Toolbar from './Toolbar/Toolbar';

const Formatting = ({ editor }) => {
  const [isShowUploadImagePopUp, setIsShowUploadImagePopUp] = useState(false);

  return (
    <>
      <Toolbar editor={editor} setIsShowUploadImagePopUp={setIsShowUploadImagePopUp} />
      {isShowUploadImagePopUp && <UploadImagePopUp editor={editor} />}
    </>
  );
};
export default Formatting;
