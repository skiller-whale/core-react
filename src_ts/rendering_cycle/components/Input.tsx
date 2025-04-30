import type { ComponentProps } from "react";

const Input = ({ children, ...rest }: ComponentProps<"input">) => (
  <input type="text" className="flex-1" {...rest} />
);

export default Input;
