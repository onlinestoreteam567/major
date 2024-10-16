import cl from './index.module.scss';

const Overlay = ({ handleClose }) => {
  return <div className={cl.overlay} onClick={handleClose}></div>;
};
export default Overlay;
