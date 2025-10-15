import { useState, useEffect, useRef } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import RangeSlider from './RangeSlider/RangeSlider';
import { useDispatch, useSelector } from 'react-redux';
import { filterPrice, loadProducts, selectProducts } from '@redux/selectors';
import { setPrice } from '@redux/filter/filterSlice';
import { handleSliderMinChange } from './helpers/handleSliderMinChange';
import { handleSliderMaxChange } from './helpers/handleSliderMaxChange';
import { handleMinInputChange } from './helpers/handleMinInputChange';
import { handleMaxInputChange } from './helpers/handleMaxInputChange';
import { getByPrice } from './helpers/getByPrice';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';

const FilterByPrice = ({ handleCloseAside }) => {
  const { deskmin, deskmax } = useScreenSizes();
  const isShowCloseAsideAnimation = deskmin || deskmax;
  const { getTranslation } = useTranslationNamespace('common');
  const newPrice = useSelector(filterPrice);
  const products = useSelector(selectProducts);
  const isLoading = useSelector(loadProducts);
  const [minPrice, setMinPrice] = useState(newPrice.min);
  const [maxPrice, setMaxPrice] = useState(newPrice.max);
  const [maxLimit, setMaxLimit] = useState(1);
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

      if (maxLimit === 1) setMaxLimit(newMaxPrice);
      setMinPrice(newMinPrice);
      setMaxPrice(newMaxPrice);
      setMinInputValue(newMinPrice.toString());
      setMaxInputValue(newMaxPrice.toString());
      dispatch(setPrice({ min: newMinPrice, max: newMaxPrice }));
    }
  }, [products, maxLimit, dispatch]);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = (minPrice / maxLimit) * 100 + '%';
      progressRef.current.style.right = 100 - (maxPrice / maxLimit) * 100 + '%';
    }
  }, [minPrice, maxPrice, maxLimit]);

  const handleKeyPress = (e) => {
    const isMinInputValid = !isNaN(minInputValue) && minInputValue.trim() !== '';
    const isMaxInputValid = !isNaN(maxInputValue) && maxInputValue.trim() !== '';
    const isPriceValid = parseFloat(minInputValue) <= parseFloat(maxInputValue);

    if (e.key === 'Enter' && isMinInputValid && isMaxInputValid && isPriceValid) {
      getByPrice(minPrice, maxPrice, priceGap, setMinPrice, setMaxPrice, setMinInputValue, setMaxInputValue, dispatch);
    }
  };

  return (
    <div className={cl.filterByPrice}>
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
          <input
            aria-label={getTranslation('inputMinAriaLabel')}
            type="text"
            value={minInputValue}
            onChange={(e) => handleMinInputChange(e, setMinInputValue, setMinPrice)}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className={cl.field}>
          <input
            aria-label={getTranslation('inputMaxAriaLabel')}
            type="text"
            value={maxInputValue}
            onChange={(e) => handleMaxInputChange(e, setMaxInputValue, setMaxPrice)}
            onKeyDown={handleKeyPress}
          />
        </div>
        <button
          onClick={() => {
            getByPrice(
              minPrice,
              maxPrice,
              priceGap,
              setMinPrice,
              setMaxPrice,
              setMinInputValue,
              setMaxInputValue,
              dispatch
            );
            !isShowCloseAsideAnimation && handleCloseAside();
          }}
          disabled={
            minInputValue.trim() === '' ||
            maxInputValue.trim() === '' ||
            isNaN(minInputValue) ||
            isNaN(maxInputValue) ||
            parseFloat(minInputValue) > parseFloat(maxInputValue) ||
            parseFloat(maxInputValue) < parseFloat(minInputValue) ||
            isLoading
          }
        >
          {getTranslation('ok')}
        </button>
      </div>
    </div>
  );
};

export default FilterByPrice;
