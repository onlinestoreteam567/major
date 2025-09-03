import { useState } from 'react';
import StarTrue from '@assets/svg/StarTrue';
import StarFalse from '@assets/svg/StarFalse';

export default function StarsCheskBox({ onChange, name, value }) {
  const [checkboxStates, setCheckboxStates] = useState([false, false, false, false, false]);

  const getStars = (index) => {
    const stars = checkboxStates.map((_, i) => i <= index);
    setCheckboxStates(stars);
    value = parseInt(index + 1);
    onChange(value);
  };

  return (
    <ul>
      {checkboxStates.map((_, i) => (
        <li key={i}>
          <input name={name} type="checkbox" onChange={() => getStars(i)} checked={checkboxStates[i]} />
          {checkboxStates[i] ? <StarTrue /> : <StarFalse />}
        </li>
      ))}
    </ul>
  );
}
