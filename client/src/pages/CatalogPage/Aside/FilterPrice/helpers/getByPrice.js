import { getFilteredProducts } from '@redux/products/service';
import { setPrice } from '@redux/filter/filterSlice';

export const getByPrice = (
  minPrice,
  maxPrice,
  priceGap,
  setMinPrice,
  setMaxPrice,
  setMinInputValue,
  setMaxInputValue,
  dispatch
) => {
  const validMinPrice = Math.max(0, Math.min(minPrice, maxPrice - priceGap));
  const validMaxPrice = Math.max(validMinPrice + priceGap, maxPrice);

  setMinPrice(validMinPrice);
  setMaxPrice(validMaxPrice);
  setMinInputValue(validMinPrice.toString());
  setMaxInputValue(validMaxPrice.toString());

  dispatch(setPrice({ min: validMinPrice, max: validMaxPrice }));
  dispatch(getFilteredProducts({ min: validMinPrice, max: validMaxPrice }));
};
