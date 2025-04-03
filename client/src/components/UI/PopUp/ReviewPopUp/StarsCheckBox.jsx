import { useState } from 'react';
import { Controller } from 'react-hook-form';

import StarTrue from '@assets/svg/StarTrue';
import StarFalse from '@assets/svg/StarFalse';

export default function StarsCheckBox({ name, control }) {
  const [checkboxState, setCheckboxState] = useState([false, false, false, false, false]);

  const getStars = (index, fieldOnChange) => {
    const stars = checkboxState.map((_, i) => i <= index);
    setCheckboxState(stars);
    const newValue = index + 1;
    fieldOnChange(newValue);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <ul>
          {checkboxState.map((_, i) => (
            <li key={i}>
              <input name={name} type="checkbox" onChange={() => getStars(i, onChange)} checked={i < value} />
              {i < value ? <StarTrue /> : <StarFalse />}
            </li>
          ))}
        </ul>
      )}
    />
  );
}
