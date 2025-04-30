import type { FocusEvent, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Input = ({ label, id, ...rest }: Props) => (
  <div className="flex-1 flex flex-col gap-2">
    <label htmlFor={id} className="font-semibold cursor-pointer">
      {label}
    </label>
    <input id={id} {...rest} />
  </div>
);

export default Input;
