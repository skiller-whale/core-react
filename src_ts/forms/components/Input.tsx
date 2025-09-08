import type { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  label: string;
};

const Input = ({ label, name, ...rest }: Props) => (
  <div className="flex-1 flex flex-col gap-2">
    <label htmlFor={name} className="font-semibold cursor-pointer">
      {label}
    </label>
    <input id={name} name={name} {...rest} />
  </div>
);

export default Input;
