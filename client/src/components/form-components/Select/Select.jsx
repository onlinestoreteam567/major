export function Select({ register, options, name, ...rest }) {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value, idx) => (
        <option key={idx} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
