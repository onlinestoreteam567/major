export const handleCloseWithDelay = (setHidden, setShow, delay = 250) => {
  setHidden(true);
  clearTimeout();
  setTimeout(() => {
    setShow(false);
    setHidden(false);
  }, delay);
};
