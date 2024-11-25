export function ErrorMessage({ name, errors }) {
  return <>{errors[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}</>;
}
