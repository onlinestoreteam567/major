export const handleMinInputChange = (e, setMinInputValue, setMinPrice, minPrice) => {
  const value = e.target.value;
  if (value === '') {
    setMinInputValue('');
    setMinPrice(0);
  } else if (value === '0') {
    setMinInputValue('');
  } else if (!isNaN(value)) {
    const numValue = parseInt(value);
    setMinInputValue(value);
    setMinPrice(numValue);
  } else {
    setMinInputValue(minPrice.toString());
  }
};
