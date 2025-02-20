import { useEffect, useState } from 'react';
import cl from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByPrice } from '@redux/products/service';
import { filterPrice } from '@redux/selectors';
import { setPrice } from '@redux/filter/filterSlice';

export default function FilterByPrice() {
  const dispatch = useDispatch();
  const newPrice = useSelector(filterPrice);
  // console.log(price);

  const [min, setMin] = useState(newPrice.min);
  const [max, setMax] = useState(newPrice.max);
  console.log('PRICE', min, max);

  useEffect(() => {
    setMin(newPrice.min);
    setMax(newPrice.max);
  }, [newPrice]);

  const handleMinChange = (event) => {
    setMin(Math.min(Number(event.target.value), max));
  };

  const handleMaxChange = (event) => {
    setMax(Math.max(Number(event.target.value), min));
  };

  const getByPrice = () => {
    dispatch(setPrice({ min: min, max: max }));
    dispatch(getProductsByPrice({ min, max }));
  };

  return (
    <div className={cl.rangeInput}>
      <input
        type="range"
        className={cl.rangeMin}
        min="100"
        max="900"
        value={min}
        step="50"
        onChange={handleMinChange}
      />
      <input
        type="range"
        className={cl.rangeMax}
        min="300"
        max="1000"
        value={max}
        step="50"
        onChange={handleMaxChange}
      />
      <button type="button" onClick={getByPrice}>
        Ok
      </button>
    </div>
  );
}
