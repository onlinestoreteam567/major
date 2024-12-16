import { useState } from 'react';
import cl from './index.module.scss';

const Switch = ({ initialChecked = false }) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleToggle = () => {
    setChecked((prevChecked) => !prevChecked);
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
