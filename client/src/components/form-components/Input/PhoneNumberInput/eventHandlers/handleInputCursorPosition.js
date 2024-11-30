export function handleInputCursorPosition(e, isFocused, inputRef) {
  // Prevent user selection when input is not focused
  if (!isFocused) {
    e.preventDefault();

    // Check if ref is defined before calling focus
    inputRef.current.focus();
  }

  e.preventDefault(); // Prevent cursor positioning with mouse if already focused
}
