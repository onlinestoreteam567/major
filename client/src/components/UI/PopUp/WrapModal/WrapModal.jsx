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
    <div className={`${cl.overlay} ${isClosing ? cl.close : ''}`}>
      <div className={cl.wrapContent}>
        <button className={cl.btnClose} onClick={handleClose}>
          {close}
        </button>
        <div className={cl.content}>{content}</div>
      </div>
    </div>
  );
}
