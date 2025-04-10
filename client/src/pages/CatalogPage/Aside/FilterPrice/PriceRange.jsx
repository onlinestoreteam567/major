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
    }
  }, [products]);

  useEffect(() => {
    setMinPrice(newPrice.min);
    setMaxPrice(newPrice.max);
  }, [newPrice]);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = (minPrice / maxLimit) * 100 + '%';
      progressRef.current.style.right = 100 - (maxPrice / maxLimit) * 100 + '%';
    }
  }, [minPrice, maxPrice, maxLimit]);

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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getByPrice();
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
          <input type="number" value={minPrice} onChange={handleMinInputChange} onKeyDown={handleKeyPress} />
        </div>
        <div className={cl.field}>
          <span>{getTranslation('to')}</span>
          <input type="number" value={maxPrice} onChange={handleMaxInputChange} onKeyDown={handleKeyPress} />
        </div>
        <button onClick={getByPrice}>{getTranslation('ok')}</button>
      </div>
    </div>
  );
};

export default PriceRange;
