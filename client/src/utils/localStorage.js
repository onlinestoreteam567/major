export const loadFromStorage = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData ? JSON.parse(serializedData) : undefined;
  } catch (e) {
    console.error(`Error loading key "${key}" from localStorage:`, e);
    return undefined;
  }
};

export const saveToStorage = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (e) {
    console.error(`Error saving key "${key}" to localStorage:`, e);
  }
};

export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error(`Error removing key "${key}" from localStorage:`, e);
  }
};
