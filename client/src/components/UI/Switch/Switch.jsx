import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import { useState } from 'react';

const checkedImg = '/svg/catalogPage/check.svg';
const uncheckedImg = '/svg/catalogPage/uncheck.svg';

const Switch = ({ labelText, img, value, onChange, selected, name }) => {
  const [action, setAction] = useState();
  const checked = undefined;
  return (
    <div className={cl.switchWrapper}>
      <img src={img} />
      <Heading type="h4">{labelText}</Heading>
      <label className={`${checked ? cl.active : cl.inactive} ${selected === null ? cl.initial : ''}`}>
        <input type="radio" name={name} onChange={() => onChange(value)} />
        <span className={cl.slider}>
          {/* !background image instead of condition */}
          <img src={checked ? checkedImg : uncheckedImg} alt={checked ? 'Checked' : 'Unchecked'} />
        </span>
      </label>
    </div>
  );
};

export default Switch;
