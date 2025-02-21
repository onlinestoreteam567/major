import { useEffect, useRef, useState } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import RangeSlider from './RangeSlider';

const PriceRange = ({ setValue }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999);
  const priceGap = 1;
  const maxLimit = 999;

  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = (minPrice / maxLimit) * 100 + '%';
      progressRef.current.style.right = 100 - (maxPrice / maxLimit) * 100 + '%';
    }

    // Update form values for react-hook-form
    setValue(`${name}.min`, minPrice);
    setValue(`${name}.max`, maxPrice);
  }, [minPrice, maxPrice, setValue]);

  const handleMinInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value <= maxLimit && maxPrice - value >= priceGap) {
      setMinPrice(value);
    }
  };

  const handleMaxInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value <= maxLimit && value - minPrice >= priceGap) {
      setMaxPrice(value);
    }
  };

  const { getTranslation } = useTranslationNamespace('common');

  const localRef = useRef(null);

  return (
    <div className={cl.rangeWrapper} ref={localRef}>
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
          <input type="number" value={minPrice} onChange={handleMinInputChange} name={`${name}.min`} />
        </div>
        <div className={cl.field}>
          <span>{getTranslation('to')}</span>
          <input type="number" value={maxPrice} onChange={handleMaxInputChange} name={`${name}.max`} />
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
