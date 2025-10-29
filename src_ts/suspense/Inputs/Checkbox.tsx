import type { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  label: string;
};

const Checkbox = ({ label, ...rest }: Props) => (
  <label className="flex items-baseline gap-2 font-semibold cursor-pointer">
    {label}:
    <input {...rest} type="checkbox" />
  </label>
);

export default Checkbox;
