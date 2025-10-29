const Checkbox = ({ label, ...rest }) => (
  <label className="flex items-baseline gap-2 font-semibold cursor-pointer">
    {label}:
    <input {...rest} type="checkbox" />
  </label>
);

export default Checkbox;
