// Helper function for user data validation
export default function validateUserData(data) {
  const { email, first_name, last_name, role } = data;
  if (
    !email ||
    typeof email !== 'string' ||
    !first_name ||
    typeof first_name !== 'string' ||
    !last_name ||
    typeof last_name !== 'string' ||
    typeof role !== 'number'
  ) {
    throw new Error(
      'Invalid data structure. Expected email (string), first_name (string), last_name (string), and role (number).'
    );
  }
}
