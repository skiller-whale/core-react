import type { ComponentProps } from "react";

const Button = ({ children, ...rest }: ComponentProps<"button">) => (
  <button
    className="min-w-32 bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded whitespace-nowrap cursor-pointer disabled:cursor-not-allowed"
    {...rest}
  >
    {children}
  </button>
);

export default Button;
