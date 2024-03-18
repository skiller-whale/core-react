const Select = ({ options, ...rest }) => (
  <select {...rest}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
)

export default Select
