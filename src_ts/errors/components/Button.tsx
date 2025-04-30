import type { ButtonHTMLAttributes } from "react";

const Button = ({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`p-3 bg-blue-600 hover:bg-blue-800 text-white ${className ?? ""}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
