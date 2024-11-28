export function handleInputChange(e, setInputsValue) {
  const phoneNumberValue = e.target.value;

  // Remove all non-digit characters (excluding underscores) to count only the digits
  const digitsOnly = phoneNumberValue.replace(/[^\d]/g, '');
  // Limit the number of digits
  if (digitsOnly.length > 12) {
    return;
  }

  const cleanedPhoneNumber = phoneNumberValue.replace('_', '');

  // Allow only digits, parentheses, spaces, the plus sign, and underscores
  const isValidNumber = /^[\d ()+_]*$/.test(phoneNumberValue);

  if (isValidNumber) {
    setInputsValue(cleanedPhoneNumber);
  }
}
