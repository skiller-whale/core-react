const Checkbox = ({ label, id, ...rest }) => (
  <label
    htmlFor={id}
    className="flex-1 flex gap-2 items-center border border-slate-800 px-3 py-2 font-semibold cursor-pointer"
  >
    <input id={id} type="checkbox" className="flex-none" {...rest} />
    {label}
  </label>
);

export default Checkbox;
