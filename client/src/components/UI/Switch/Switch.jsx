import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

const checkedImg = '/svg/catalogPage/check.svg';
const uncheckedImg = '/svg/catalogPage/uncheck.svg';

const Switch = ({ labelText, img, value, checked, onChange, selected }) => {
  return (
    <div className={cl.switchWrapper} onClick={() => onChange(value)}>
      <img src={img} />
      <Heading type="h4">{labelText}</Heading>
      <label className={`${checked ? cl.active : cl.inactive} ${selected === null ? cl.initial : ''}`}>
        <input type="radio" checked={checked} onChange={() => onChange(value)} />
        <span className={cl.slider}>
          <img src={checked ? checkedImg : uncheckedImg} alt={checked ? 'Checked' : 'Unchecked'} />
        </span>
      </label>
    </div>
  );
};

export default Switch;
