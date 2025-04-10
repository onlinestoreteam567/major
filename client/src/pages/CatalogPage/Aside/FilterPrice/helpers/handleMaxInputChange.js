export const handleMaxInputChange = (e, setMaxInputValue, setMaxPrice, minPrice) => {
  const value = e.target.value;
  setMaxInputValue(value);
  if (value === '') {
    setMaxPrice(0);
  } else if (!isNaN(value)) {
    const numValue = parseInt(value);
    if (numValue >= minPrice) {
      setMaxPrice(numValue);
    }
  }
};
