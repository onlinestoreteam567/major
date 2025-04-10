export const handleSliderMaxChange = (value, setMaxPrice, setMaxInputValue) => {
  setMaxPrice(value);
  setMaxInputValue(value.toString());
};
