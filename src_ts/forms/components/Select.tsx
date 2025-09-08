import type { ComponentProps } from "react";

type Props = ComponentProps<"select"> & {
  label: string;
  options: readonly string[];
};

const Select = ({ label, name, options, ...rest }: Props) => (
  <div className="flex-1 flex flex-col gap-2">
    <label htmlFor={name} className="font-semibold cursor-pointer">
      {label}
    </label>
    <select id={name} name={name} {...rest}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
