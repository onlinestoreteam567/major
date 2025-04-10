export const handleMinInputChange = (e, setMinInputValue, setMinPrice, maxPrice, minPrice) => {
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
