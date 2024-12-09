import cl from './index.module.scss';
import { useState } from 'react';
import ButtonMinus from '@assets/svg/Icons/ButtonMinus';
import ButtonPlus from '@assets/svg/Icons/ButtonPlus';

export default function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className={cl.wrapCounter}>
      <button type="button" onClick={handleDecrement} disabled={count <= 1}>
        <ButtonMinus />
      </button>
      <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
      <button type="button" onClick={handleIncrement}>
        <ButtonPlus />
      </button>
    </div>
  );
}
