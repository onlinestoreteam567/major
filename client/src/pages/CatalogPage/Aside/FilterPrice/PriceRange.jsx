import { useState, useEffect, useRef } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import RangeSlider from './RangeSlider';
import { useDispatch, useSelector } from 'react-redux';
import { filterPrice, selectProducts } from '@redux/selectors';
import { setPrice } from '@redux/filter/filterSlice';
import { handleSliderMinChange } from './helpers/handleSliderMinChange';
import { handleSliderMaxChange } from './helpers/handleSliderMaxChange';
import { handleMinInputChange } from './helpers/handleMinInputChange';
import { handleMaxInputChange } from './helpers/handleMaxInputChange';
import { getByPrice } from './helpers/getByPrice';

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
      const newMinPrice = Math.floor(minProductPrice);
      const newMaxPrice = Math.ceil(maxProductPrice);

      setMinPrice(newMinPrice);
      setMaxPrice(newMaxPrice);
      setMaxLimit(newMaxPrice);
      setMinInputValue(newMinPrice.toString());
      setMaxInputValue(newMaxPrice.toString());
      dispatch(setPrice({ min: newMinPrice, max: newMaxPrice }));
    }
  }, [products, dispatch]);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = (minPrice / maxLimit) * 100 + '%';
      progressRef.current.style.right = 100 - (maxPrice / maxLimit) * 100 + '%';
    }
  }, [minPrice, maxPrice, maxLimit]);

  const handleKeyPress = (e) => {
    // Check if inputs are clean (not numbers)
    const isMinInputValid = !isNaN(minInputValue) && minInputValue.trim() !== '';
    const isMaxInputValid = !isNaN(maxInputValue) && maxInputValue.trim() !== '';
    const isPriceValid = parseFloat(minInputValue) <= parseFloat(maxInputValue);

    if (e.key === 'Enter' && isMinInputValid && isMaxInputValid && isPriceValid) {
      getByPrice(minPrice, maxPrice, priceGap, setMinPrice, setMaxPrice, setMinInputValue, setMaxInputValue, dispatch);
    }
  };

  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={cl.rangeWrapper}>
      <div className={cl.slider}>
        <div className={cl.progress} ref={progressRef}></div>
      </div>

      <RangeSlider
        minPrice={minPrice}
        setMinPrice={(value) => handleSliderMinChange(value, setMinPrice, setMinInputValue)}
        maxPrice={maxPrice}
        setMaxPrice={(value) => handleSliderMaxChange(value, setMaxPrice, setMaxInputValue)}
        maxLimit={maxLimit}
        priceGap={priceGap}
      />

      <div className={cl.priceInput}>
        <div className={cl.field}>
          <span>{getTranslation('from')}</span>
          <input
            type="text"
            value={minInputValue}
            onChange={(e) => handleMinInputChange(e, setMinInputValue, setMinPrice, maxPrice, minPrice)}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className={cl.field}>
          <span>{getTranslation('to')}</span>
          <input
            type="text"
            value={maxInputValue}
            onChange={(e) => handleMaxInputChange(e, setMaxInputValue, setMaxPrice, minPrice)}
            onKeyDown={handleKeyPress}
          />
        </div>
        <button
          onClick={() =>
            getByPrice(
              minPrice,
              maxPrice,
              priceGap,
              setMinPrice,
              setMaxPrice,
              setMinInputValue,
              setMaxInputValue,
              dispatch
            )
          }
          disabled={
            minInputValue.trim() === '' ||
            maxInputValue.trim() === '' ||
            isNaN(minInputValue) ||
            isNaN(maxInputValue) ||
            parseFloat(minInputValue) > parseFloat(maxInputValue) ||
            parseFloat(maxInputValue) < parseFloat(minInputValue)
          }
        >
          {getTranslation('ok')}
        </button>
      </div>
    </div>
  );
};

export default PriceRange;
