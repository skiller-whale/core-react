import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Checkbox = ({ label, id, ...rest }: Props) => (
  <label
    htmlFor={id}
    className="flex-1 flex gap-2 items-center border border-slate-800 px-3 py-2 font-semibold cursor-pointer"
  >
    <input id={id} type="checkbox" className="flex-none" {...rest} />
    {label}
  </label>
);

export default Checkbox;
