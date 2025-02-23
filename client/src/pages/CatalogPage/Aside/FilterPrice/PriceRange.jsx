import { useState, useEffect, useRef } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import RangeSlider from './RangeSlider';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByPrice } from '@redux/products/service';
import { filterPrice } from '@redux/selectors';
import { setPrice } from '@redux/filter/filterSlice';

const PriceRange = () => {
  const newPrice = useSelector(filterPrice);
  const [minPrice, setMinPrice] = useState(newPrice.min);
  const [maxPrice, setMaxPrice] = useState(newPrice.max);
  const priceGap = 1;
  const maxLimit = 999;
  const dispatch = useDispatch();
  const progressRef = useRef(null);

  useEffect(() => {
    setMinPrice(newPrice.min);
    setMaxPrice(newPrice.max);
  }, [newPrice]);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = (minPrice / maxLimit) * 100 + '%';
      progressRef.current.style.right = 100 - (maxPrice / maxLimit) * 100 + '%';
    }
  }, [minPrice, maxPrice]);

  const handleMinInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= maxLimit && maxPrice - value >= priceGap) {
      setMinPrice(value);
    }
  };

  const handleMaxInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= maxLimit && value - minPrice >= priceGap) {
      setMaxPrice(value);
    }
  };

  const getByPrice = () => {
    dispatch(setPrice({ min: minPrice, max: maxPrice }));
    dispatch(getProductsByPrice({ min: minPrice, max: maxPrice }));
  };

  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={cl.rangeWrapper}>
      <div className={cl.slider}>
        <div className={cl.progress} ref={progressRef}></div>
      </div>

      <RangeSlider
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        maxLimit={maxLimit}
        priceGap={priceGap}
      />

      <div className={cl.priceInput}>
        <div className={cl.field}>
          <span>{getTranslation('from')}</span>
          <input type="number" value={minPrice} onChange={handleMinInputChange} />
        </div>
        <div className={cl.field}>
          <span>{getTranslation('to')}</span>
          <input type="number" value={maxPrice} onChange={handleMaxInputChange} />
        </div>
        <button onClick={getByPrice}>{getTranslation('ok')}</button>
      </div>
    </div>
  );
};

export default PriceRange;
