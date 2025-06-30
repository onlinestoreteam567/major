const getSelectedItemsNames = (selectedIds, items) => {
  return items.filter((item) => selectedIds.includes(String(item.id)));
};

export default getSelectedItemsNames;
