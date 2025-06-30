const handleToggleOption = (event, itemId, selectedValues, onChange, onBlur) => {
  event.stopPropagation();
  let newSelectedValues;
  if (selectedValues.includes(itemId)) {
    newSelectedValues = selectedValues.filter((id) => id !== itemId);
  } else {
    newSelectedValues = [...selectedValues, itemId];
  }
  onChange(newSelectedValues);
  onBlur();
};

export default handleToggleOption;
