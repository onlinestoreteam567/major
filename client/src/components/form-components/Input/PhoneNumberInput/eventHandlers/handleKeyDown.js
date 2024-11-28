// Prevent cursor movement using arrow keys or other non-character keys
const notForbiddenKeys = ['Backspace', 'Tab', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export function handleKeyDown(e) {
  if (!notForbiddenKeys.includes(e.key)) {
    e.preventDefault();
  }
}
