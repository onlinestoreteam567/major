export function Input({ register, name, ...rest }) {
  return <input {...register(name)} {...rest} />;
}
