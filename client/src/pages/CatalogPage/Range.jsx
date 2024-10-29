import { useState } from 'react';
import cl from './index.module.scss';

const PriceRangeSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(999); // Set initial max value
  const minGap = 100; // Minimum gap between the two sliders
  const sliderMinValue = 0; // Adjust as needed
  const sliderMaxValue = 999; // Adjust as needed

  const handleMinChange = (e) => {
    const value = Math.min(e.target.value, maxValue - minGap);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(e.target.value, minValue + minGap);
    setMaxValue(value);
  };

  const rangeStyle = {
    left: `${Math.max(((minValue - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100, 0)}%`,
    right: `${Math.max(100 - ((maxValue - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100, 0)}%`,
  };

  return (
    <div className={cl.doubleSliderBox}>
      <h3 className={cl.rangeTitle}>Price Range Slider</h3>
      <div className={cl.rangeSlider}>
        <div className={cl.sliderTrack} style={rangeStyle}></div>
        <input
          type="range"
          className={cl.minVal}
          min={sliderMinValue}
          max={sliderMaxValue}
          value={minValue}
          onChange={handleMinChange}
        />
        <input
          type="range"
          className={cl.maxVal}
          min={sliderMinValue}
          max={sliderMaxValue}
          value={maxValue}
          onChange={handleMaxChange}
        />
      </div>
      <div className={cl.inputBox}>
        <div className={cl.inputWrap}>
          <div className={cl.minBox}>
            <input
              type="number"
              className={cl.minInput}
              value={minValue}
              onChange={(e) => setMinValue(Math.max(0, e.target.value))}
            />
          </div>
          <div className={cl.maxBox}>
            <input
              type="number"
              className={cl.maxInput}
              value={maxValue}
              onChange={(e) => setMaxValue(Math.max(minValue + minGap, e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
