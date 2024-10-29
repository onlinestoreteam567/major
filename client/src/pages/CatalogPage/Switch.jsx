import { useState } from 'react';
import cl from './index.module.scss';
import uncheck from '@svg/catalogPage/uncheck.svg';
import check from '@svg/catalogPage/check.svg';

const Switch = ({ onChange, initialChecked = false }) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleToggle = () => {
    setChecked((prevChecked) => !prevChecked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className={cl.switchButton}>
      <label>
        <input type="checkbox" checked={checked} onChange={handleToggle} />
        <span className={cl.slider}>
          <img src={checked ? check : uncheck} alt={checked ? 'Checked' : 'Unchecked'} />
        </span>
      </label>
    </div>
  );
};

export default Switch;
