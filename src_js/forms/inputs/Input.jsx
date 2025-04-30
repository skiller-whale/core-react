const Input = ({ label, id, ...rest }) => (
  <div className="flex-1 flex flex-col gap-2">
    <label htmlFor={id} className="font-semibold cursor-pointer">
      {label}
    </label>
    <input id={id} {...rest} />
  </div>
);

export default Input;
