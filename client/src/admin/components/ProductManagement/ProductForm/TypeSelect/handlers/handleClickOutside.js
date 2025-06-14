const handleClickOutside = (e, wrapperRef, setIsOpen) => {
  if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
    setIsOpen(false);
  }
};

export default handleClickOutside;
