import cl from './index.module.scss';

const RangeSlider = ({ minPrice, setMinPrice, maxPrice, setMaxPrice, maxLimit, priceGap }) => {
  const handleRangeMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (maxPrice - value >= priceGap) {
      setMinPrice(value);
    }
  };

  const handleRangeMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value - minPrice >= priceGap) {
      setMaxPrice(value);
    }
  };

  return (
    <div className={cl.rangeInput}>
      <input
        type="range"
        className={cl.rangeMin}
        min="0"
        max={maxLimit}
        value={minPrice}
        step="1"
        onChange={handleRangeMinChange}
      />
      <input
        type="range"
        className={cl.rangeMax}
        min="0"
        max={maxLimit}
        value={maxPrice}
        step="1"
        onChange={handleRangeMaxChange}
      />
    </div>
  );
};
export default RangeSlider;
