const getSelectedItemName = (currentValue, items) => {
  const selectedItem = items.find((item) => String(item.id) === String(currentValue));
  return selectedItem ? selectedItem.name : 'Обрати';
};

export default getSelectedItemName;
