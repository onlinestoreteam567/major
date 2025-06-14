const getSelectedItemName = (currentValue, items) => {
  const selectedItem = items.find((item) => String(item.id) === String(currentValue));
  return selectedItem ? selectedItem.name : 'Select an option';
};

export default getSelectedItemName;
