import { useState } from 'react';
import cl from './index.module.scss';
import { useDispatch } from 'react-redux';
import { getProductsByPrice } from '@redux/products/service';

export default function FilterByPrice() {
  const [min, setMin] = useState('100');
  const [max, setMax] = useState('999');
  // console.log(min, max);

  const dispatch = useDispatch();

  const getByPrice = () => {
    dispatch(getProductsByPrice(min, max));
  };

  return (
    <div className={cl.rangeInput}>
      <input
        type="range"
        className={cl.rangeMin}
        min="100"
        max="900"
        // value={minPrice}
        step="50"
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        type="range"
        className={cl.rangeMax}
        min="500"
        max="1000"
        // value={maxPrice}
        step="50"
        onChange={(e) => setMax(e.target.value)}
      />
      <button type="button" onClick={getByPrice}>
        Ok
      </button>
    </div>
  );
}
