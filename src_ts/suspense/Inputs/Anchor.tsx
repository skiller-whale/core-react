import type { ComponentProps } from "react";

const Anchor = ({ children, ...rest }: ComponentProps<"a">) => (
  <a className="underline text-blue-600 cursor-pointer" {...rest}>
    {children}
  </a>
);

export default Anchor;
