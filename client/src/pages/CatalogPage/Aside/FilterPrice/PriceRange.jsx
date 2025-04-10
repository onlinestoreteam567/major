import { useState, useEffect, useRef } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import RangeSlider from './RangeSlider';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByPrice } from '@redux/products/service';
import { filterPrice, selectProducts } from '@redux/selectors';
import { setPrice } from '@redux/filter/filterSlice';

const PriceRange = () => {
  const newPrice = useSelector(filterPrice);
  const products = useSelector(selectProducts);
  const [minPrice, setMinPrice] = useState(newPrice.min);
  const [maxPrice, setMaxPrice] = useState(newPrice.max);
  const [maxLimit, setMaxLimit] = useState(999);
  const [minInputValue, setMinInputValue] = useState(newPrice.min.toString());
  const [maxInputValue, setMaxInputValue] = useState(newPrice.max.toString());
  const priceGap = 1;
  const dispatch = useDispatch();
  const progressRef = useRef(null);

  useEffect(() => {
    if (products && products.length > 0) {
      const pricesWithDiscounts = products.map((product) => {
        if (product.discount) {
          return product.price - (product.price * product.discount) / 100;
        }
        return product.price;
      });
      const minProductPrice = Math.min(...pricesWithDiscounts);
      const maxProductPrice = Math.max(...pricesWithDiscounts);
      setMinPrice(Math.floor(minProductPrice));
      setMaxPrice(Math.ceil(maxProductPrice));
      setMaxLimit(Math.ceil(maxProductPrice));
      setMinInputValue(Math.floor(minProductPrice).toString());
      setMaxInputValue(Math.ceil(maxProductPrice).toString());
    }
  }, [products]);

  useEffect(() => {
    setMinPrice(newPrice.min);
    setMaxPrice(newPrice.max);
    setMinInputValue(newPrice.min.toString());
    setMaxInputValue(newPrice.max.toString());
  }, [newPrice]);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = (minPrice / maxLimit) * 100 + '%';
      progressRef.current.style.right = 100 - (maxPrice / maxLimit) * 100 + '%';
    }
  }, [minPrice, maxPrice, maxLimit]);

  const handleMinInputChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setMinInputValue('');
      setMinPrice(0);
    } else if (!isNaN(value)) {
      const numValue = parseInt(value);
      if (numValue <= maxPrice) {
        setMinInputValue(value);
        if (minPrice === 0) {
          setMinPrice(numValue);
        } else {
          setMinPrice(numValue);
        }
      }
    }
  };

  const handleMaxInputChange = (e) => {
    const value = e.target.value;
    setMaxInputValue(value);
    if (value === '') {
      setMaxPrice(0);
    } else if (!isNaN(value)) {
      const numValue = parseInt(value);
      setMaxPrice(numValue);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getByPrice();
    }
  };

  const getByPrice = () => {
    const validMinPrice = Math.max(0, Math.min(minPrice, maxPrice - priceGap));
    const validMaxPrice = Math.max(validMinPrice + priceGap, maxPrice);

    setMinPrice(validMinPrice);
    setMaxPrice(validMaxPrice);
    setMinInputValue(validMinPrice.toString());
    setMaxInputValue(validMaxPrice.toString());

    dispatch(setPrice({ min: validMinPrice, max: validMaxPrice }));
    dispatch(getProductsByPrice({ min: validMinPrice, max: validMaxPrice }));
  };

  const handleSliderMinChange = (value) => {
    setMinPrice(value);
    setMinInputValue(value.toString());
  };

  const handleSliderMaxChange = (value) => {
    setMaxPrice(value);
    setMaxInputValue(value.toString());
  };

  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={cl.rangeWrapper}>
      <div className={cl.slider}>
        <div className={cl.progress} ref={progressRef}></div>
      </div>

      <RangeSlider
        minPrice={minPrice}
        setMinPrice={handleSliderMinChange}
        maxPrice={maxPrice}
        setMaxPrice={handleSliderMaxChange}
        maxLimit={maxLimit}
        priceGap={priceGap}
      />

      <div className={cl.priceInput}>
        <div className={cl.field}>
          <span>{getTranslation('from')}</span>
          <input type="text" value={minInputValue} onChange={handleMinInputChange} onKeyDown={handleKeyPress} />
        </div>
        <div className={cl.field}>
          <span>{getTranslation('to')}</span>
          <input type="text" value={maxInputValue} onChange={handleMaxInputChange} onKeyDown={handleKeyPress} />
        </div>
        <button onClick={getByPrice}>{getTranslation('ok')}</button>
      </div>
    </div>
  );
};

export default PriceRange;
