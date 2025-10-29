import type { ComponentProps } from "react";

const Input = (props: ComponentProps<"input">) => (
  <input type="text" className="flex-1" {...props} />
);

export default Input;
