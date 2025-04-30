const Button = ({ children, ...rest }) => (
  <button
    className="min-w-32 bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded whitespace-nowrap"
    {...rest}
  >
    {children}
  </button>
);

export default Button;
