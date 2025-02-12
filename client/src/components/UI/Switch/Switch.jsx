import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

const checkedImg = '/svg/catalogPage/check.svg';
const uncheckedImg = '/svg/catalogPage/uncheck.svg';

const Switch = ({ labelText, img, value, onChange, selected, name }) => {
  return (
    <div className={cl.switchWrapper}>
      <img src={img} />
      <Heading type="h4">{labelText}</Heading>
      <label className={`${selected ? cl.active : cl.inactive}`}>
        <input type="radio" name={name} checked={selected} onChange={() => onChange(value)} />
        <span className={cl.slider}>
          <img src={selected ? checkedImg : uncheckedImg} alt={selected ? 'Checked' : 'Unchecked'} />
        </span>
      </label>
    </div>
  );
};

export default Switch;
