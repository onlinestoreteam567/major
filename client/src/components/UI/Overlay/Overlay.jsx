import { useState } from 'react';
import cl from './index.module.scss';

const Overlay = ({ handleClose }) => {
  const [isCloseAnimation, setIsCloseAnimation] = useState(false);

  const handleCloseOverlay = () => {
    handleClose();
    setIsCloseAnimation(true);
  };

  return (
    <div className={`${cl.overlay} ${isCloseAnimation ? cl.closeAnimation : ''}`} onClick={handleCloseOverlay}></div>
  );
};
export default Overlay;
