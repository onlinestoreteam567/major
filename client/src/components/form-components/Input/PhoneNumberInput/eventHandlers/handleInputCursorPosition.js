export function handleInputCursorPosition(e, isFocused, ref, inputsValue) {
  if (!inputsValue) {
    const firstUnderscoreIndex = ref.current.value.indexOf('_');
    if (firstUnderscoreIndex !== -1) {
      // Set the cursor position to one character after the first underscore
      ref.current.setSelectionRange(firstUnderscoreIndex + 1, firstUnderscoreIndex + 1);
    }
  }

  // Prevent user selection when input is not focused
  if (!isFocused) {
    e.preventDefault();

    // Check if ref is defined before calling focus
    ref.current.focus();
  }

  e.preventDefault(); // Prevent cursor positioning with mouse if already focused
}
