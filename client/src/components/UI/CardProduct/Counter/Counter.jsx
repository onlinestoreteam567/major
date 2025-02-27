import cl from './index.module.scss';
import ButtonMinus from '@assets/svg/ButtonMinus';
import ButtonPlus from '@assets/svg/ButtonPlus';

export default function Counter({ count, setCount }) {
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === '' || Number(value) < 1) {
      setCount(1);
    } else {
      setCount(Number(value));
    }
  };

  return (
    <div className={cl.wrapCounter}>
      <button type="button" onClick={handleDecrement} disabled={count <= 1}>
        <ButtonMinus />
      </button>
      <input type="number" min="1" value={count} onChange={(e) => handleChange(e)} />
      <button type="button" onClick={handleIncrement}>
        <ButtonPlus />
      </button>
    </div>
  );
}
