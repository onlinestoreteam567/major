import ButtonAriaLabel from '@components/UI/Button/ButtonAriaLabel';
import cl from './index.module.scss';
import ButtonMinus from '@components/UI/icons/ButtonMinus';
import ButtonPlus from '@components/UI/icons/ButtonPlus';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const digitRegex = /^\d*$/;

export default function ProductPageCardCounter({ count, setCount }) {
  const { getTranslation } = useTranslationNamespace('card');

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
      <ButtonAriaLabel al="increment" onClick={handleDecrement} disabled={count <= 1}>
        <ButtonMinus />
      </ButtonAriaLabel>
      <input
        aria-label={getTranslation('productQuantity')}
        type="text"
        value={count}
        onChange={(e) => handleChange(e)}
      />
      <ButtonAriaLabel al="decrement" onClick={handleIncrement}>
        <ButtonPlus />
      </ButtonAriaLabel>
    </div>
  );
}
