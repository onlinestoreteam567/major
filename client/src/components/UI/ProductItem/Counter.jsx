import Minus from '@components/Icons/Minus';
import cl from './index.module.scss';
import Plus from '@components/Icons/Plus';
import { useState } from 'react';

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
        <Minus />
      </button>
      <p>{count}</p>
      <button type="button" onClick={handleIncrement}>
        <Plus />
      </button>
    </div>
  );
}
