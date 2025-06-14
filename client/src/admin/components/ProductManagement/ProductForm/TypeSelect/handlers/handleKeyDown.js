const handleKeyDown = (event, onChange, isOpen, setIsOpen, displayRef, cl, wrapperRef) => {
  if (event.key === 'Escape') {
    setIsOpen(false);
    displayRef.current.focus(); // Return focus to the display
    event.stopPropagation();
  } else if (event.key === 'Enter' || event.key === ' ') {
    if (!isOpen) {
      setIsOpen(true);
    } else if (document.activeElement.classList.contains(cl.optionItem)) {
      // If an option is focused, select it
      const selectedId = document.activeElement.dataset.value;
      onChange(selectedId);
      setIsOpen(false);
      displayRef.current.focus();
    }
    event.preventDefault(); // Prevent default behavior for space/enter
  } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault(); // Prevent page scrolling
    if (!isOpen) {
      setIsOpen(true);
      // Focus first option when opened with arrow keys
      setTimeout(() => {
        // Small delay to ensure list is rendered
        const firstOption = wrapperRef.current.querySelector(`.${cl.optionItem}`);
        if (firstOption) {
          firstOption.focus();
        }
      }, 0);
    } else {
      const currentFocused = document.activeElement;
      const options = Array.from(wrapperRef.current.querySelectorAll(`.${cl.optionItem}`));
      const currentIndex = options.indexOf(currentFocused);

      let nextIndex;
      if (event.key === 'ArrowDown') {
        nextIndex = (currentIndex + 1) % options.length;
      } else {
        // ArrowUp
        nextIndex = (currentIndex - 1 + options.length) % options.length;
      }
      options[nextIndex].focus();
    }
  }
};

export default handleKeyDown;
