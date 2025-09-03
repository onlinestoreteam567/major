import cl from './index.module.scss';
import ButtonMinus from '@components/UI/icons/ButtonMinus';
import ButtonPlus from '@components/UI/icons/ButtonPlus';

const digitRegex = /^\d*$/;

export default function ProductPageCardCounter({ count, setCount }) {
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => count > 1 && setCount(count - 1);
  const handleChange = (e) => {
    const value = e.target.value;

    if (digitRegex.test(value)) {
      if (value === '0') return;
      if (value === '') {
        setCount('');
        return;
      }
      const parsedQuantity = parseInt(value, 10);
      setCount(parsedQuantity);
    }
  };

  return (
    <div className={cl.productPageCardCounter}>
      <button type="button" onClick={handleDecrement} disabled={count <= 1}>
        <ButtonMinus />
      </button>
      <input type="text" value={count} onChange={(e) => handleChange(e)} />
      <button type="button" onClick={handleIncrement}>
        <ButtonPlus />
      </button>
    </div>
  );
}
