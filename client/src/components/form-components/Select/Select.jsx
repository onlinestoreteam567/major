export function Select({ register, options, name, multiple, ...rest }) {
  return (
    <select {...register(name)} {...rest} {...(multiple ? { multiple: true } : {})}>
      {options.map((value, idx) => (
        <option key={idx} value={value.id}>
          {value.name} id: {value.id}
        </option>
      ))}
    </select>
  );
}
