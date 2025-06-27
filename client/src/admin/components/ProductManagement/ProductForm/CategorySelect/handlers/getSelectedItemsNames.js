const getSelectedItemsNames = (selectedIds, items) => {
  if (!selectedIds || selectedIds.length === 0) {
    return 'Обрати'; // Or any placeholder you prefer
  }
  const names = items.filter((item) => selectedIds.includes(String(item.id))).map((item) => item.name);
  return names.join(', ');
};

export default getSelectedItemsNames;
