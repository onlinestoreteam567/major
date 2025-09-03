import Arrow from '@components/UI/icons/Admin/Arrow/Arrow';
import cl from './index.module.scss';

const CustomSelectDisplay = ({ isOpen, setIsOpen, placeholder, errors, name }) => {
  return (
    <div
      className={`${cl.customSelectDisplay} ${isOpen ? cl.open : ''} ${errors[name] ? cl.error : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      tabIndex="0"
    >
      <span>{placeholder}</span>
      <span className={isOpen ? cl.open : ''}>
        <Arrow />
      </span>
    </div>
  );
};
export default CustomSelectDisplay;
