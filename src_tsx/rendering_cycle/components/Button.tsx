import type { ComponentProps } from "react";

const Button = ({ children, ...rest }: ComponentProps<"button">) => {
  // artificially slow down rendering
  const start = performance.now();
  while (performance.now() < start + 20) {}

  return (
    <button
      className="py-2 px-3 text-white bg-blue-600 hover:bg-blue-800 disabled:bg-gray-500 disabled:cursor-not-allowed"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
