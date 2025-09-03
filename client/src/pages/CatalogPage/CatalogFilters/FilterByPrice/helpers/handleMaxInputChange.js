const digitRegex = /^\d*$/;

export const handleMaxInputChange = (e, setMaxInputValue, setMaxPrice) => {
  const value = e.target.value;

  if (digitRegex.test(value)) {
    setMaxInputValue(value);
    if (value === '') {
      setMaxPrice(0);
    } else if (value === '0') {
      setMaxInputValue('');
    } else {
      const numValue = parseInt(value);
      setMaxPrice(numValue);
    }
  }
};
