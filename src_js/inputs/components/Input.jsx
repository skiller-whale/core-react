const Input = ({ label, name, ...rest }) => (
  <div className="flex-1 flex flex-col gap-2">
    <label htmlFor={name} className="font-semibold cursor-pointer">
      {label}
    </label>
    <input id={name} name={name} {...rest} />
  </div>
);

export default Input;
