import { useState } from 'react';
import cl from './index.module.scss';

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
          <img
            src={checked ? '/svg/catalogPage/check.svg' : '/svg/catalogPage/uncheck.svg'}
            alt={checked ? 'Checked' : 'Unchecked'}
          />
        </span>
      </label>
    </div>
  );
};

export default Switch;
