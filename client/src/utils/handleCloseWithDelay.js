export const handleCloseWithDelay = (setHidden, setShow, delay = 280) => {
  setHidden(true);
  clearTimeout();
  setTimeout(() => {
    setShow(false);
  }, delay);
};
