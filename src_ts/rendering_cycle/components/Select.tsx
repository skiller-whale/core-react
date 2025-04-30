import type { ComponentProps } from "react";

type Props = ComponentProps<"select"> & {
  options: string[];
};

const Select = ({ options, ...rest }: Props) => (
  <select {...rest}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Select;
