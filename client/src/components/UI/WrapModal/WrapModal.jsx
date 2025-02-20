import { useEffect, useState } from 'react';
import cl from './index.module.scss';

export default function WrapModal({ closeModal, isShow, content }) {
  const [isClosing, setIsClosing] = useState(false);

  const close = '\u2716';

  useEffect(() => {
    if (isShow) {
      setIsClosing(false);
    } else {
      setIsClosing(true);
    }
  }, [isShow]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(closeModal, 300);
  };

  return (
    <div className={`${cl.overlay} ${isClosing ? cl.hidden : ''}`}>
      <div className={cl.wrapContent}>
        <div className={cl.wrapBtn}>
          <button className={cl.btnClose} onClick={handleClose}>
            {close}
          </button>
        </div>
        <>{content}</>
      </div>
    </div>
  );
}
