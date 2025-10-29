import type { ComponentProps } from "react";

const Button = ({ children, ...rest }: ComponentProps<"button">) => (
  <button
    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
    {...rest}
  >
    {children}
  </button>
);

export default Button;
