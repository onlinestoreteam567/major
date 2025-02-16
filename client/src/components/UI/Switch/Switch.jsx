import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

// const checkedImg = '/svg/catalogPage/check.svg';
// const uncheckedImg = '/svg/catalogPage/uncheck.svg';

const Switch = ({ item, onChange, name }) => {
  return (
    <div className={cl.switchWrapper}>
      <img src={item.icon} />
      <Heading type="h4">{item.label}</Heading>
      {/* className={`${selected ? cl.active : cl.inactive}`} */}
      <label>
        <input type="radio" name={name} onChange={() => onChange(item.label)} />
        <span className={cl.slider}>
          {/* <img src={selected ? checkedImg : uncheckedImg} alt={selected ? 'Checked' : 'Unchecked'} /> */}
        </span>
      </label>
    </div>
  );
};

export default Switch;
