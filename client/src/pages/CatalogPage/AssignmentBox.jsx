import { useState } from 'react';
import cl from './index.module.scss';
import checkbox from '@svg/catalogPage/checkbox.svg';
import emptyCheckbox from '@svg/catalogPage/emptyCheckbox.svg';

const AssignmentBox = () => {
  const [checkboxes, setCheckboxes] = useState({
    normal: false,
    colored: false,
    thin: false,
    damaged: false,
    growth: false,
    cleansing: false,
  });

  const handleCheckboxChange = (name) => {
    setCheckboxes((prev) => ({
      ...prev,
      [name]: !prev[name], // Toggle the checkbox state
    }));
  };

  return (
    <ul className={cl.assignmentBox}>
      <h4>Призначення</h4>
      <li>
        <label className={cl.container} onClick={() => handleCheckboxChange('normal')}>
          <img src={checkboxes.normal ? checkbox : emptyCheckbox} alt="" />
          <p>
            Для нормального волосся <span>(0)</span>
          </p>
        </label>
      </li>
      <li>
        <label className={cl.container} onClick={() => handleCheckboxChange('colored')}>
          <img src={checkboxes.colored ? checkbox : emptyCheckbox} alt="" />
          <p>
            Для фарбованого волосся <span>(0)</span>
          </p>
        </label>
      </li>
      <li>
        <label className={cl.container} onClick={() => handleCheckboxChange('thin')}>
          <img src={checkboxes.thin ? checkbox : emptyCheckbox} alt="" />
          <p>
            Для тонкого волосся <span>(0)</span>
          </p>
        </label>
      </li>
      <li>
        <label className={cl.container} onClick={() => handleCheckboxChange('damaged')}>
          <img src={checkboxes.damaged ? checkbox : emptyCheckbox} alt="" />
          <p>
            Для пошкодженого волосся <span>(0)</span>
          </p>
        </label>
      </li>
      <li>
        <label className={cl.container} onClick={() => handleCheckboxChange('growth')}>
          <img src={checkboxes.growth ? checkbox : emptyCheckbox} alt="" />
          <p>
            Для росту волосся <span>(0)</span>
          </p>
        </label>
      </li>
      <li>
        <label onClick={() => handleCheckboxChange('cleansing')}>
          <img src={checkboxes.cleansing ? checkbox : emptyCheckbox} alt="" />
          <p>
            Глибоке очищення <span>(0)</span>
          </p>
        </label>
      </li>
    </ul>
  );
};

export default AssignmentBox;
