import { useState, useEffect } from 'react';

const PriceRange = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const priceGap = 50;
  const maxLimit = 999;

  useEffect(() => {
    const progress = document.querySelector('.slider .progress');
    progress.style.left = (minPrice / maxLimit) * 100 + '%';
    progress.style.right = 100 - (maxPrice / maxLimit) * 100 + '%';
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
    <div className="wrapper">
      <div className="price-input">
        <div className="field">
          <span>Min</span>
          <input type="number" className="input-min" value={minPrice} onChange={handleMinInputChange} />
        </div>
        <div className="seperator">-</div>
        <div className="field">
          <span>Max</span>
          <input type="number" className="input-max" value={maxPrice} onChange={handleMaxInputChange} />
        </div>
      </div>
      <div className="slider">
        <div className="progress"></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          className="range-min"
          min="0"
          max={maxLimit}
          value={minPrice}
          step="1"
          onChange={handleRangeMinChange}
        />
        <input
          type="range"
          className="range-max"
          min="0"
          max={maxLimit}
          value={maxPrice}
          step="1"
          onChange={handleRangeMaxChange}
        />
      </div>
    </div>
  );
};

export default PriceRange;
