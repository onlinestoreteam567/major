// Prevent cursor movement using arrow keys or other non-character keys
const notForbiddenKeys = ['Backspace', 'Tab', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export function handleKeyDown(e, inputRef, inputsValue) {
  const firstUnderscoreIndex = inputRef.current.value.indexOf('_');
  if (inputsValue === '+38 (0__)  __ __ ___') {
    inputRef.current.setSelectionRange(firstUnderscoreIndex + 1, firstUnderscoreIndex + 1);
  }

  if (!notForbiddenKeys.includes(e.key)) {
    e.preventDefault();
  }
}
