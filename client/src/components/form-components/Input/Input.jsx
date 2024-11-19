export function Input({ register, name, ...rest }) {
  console.log(register);
  return <input {...register(name)} {...rest} />;
}
