const Button = ({ onClick, children, ...rest }) => (
  <button
    onClick={onClick}
    className="rounded w-12 h-12 bg-blue-500 hover:bg-blue-800 font-semibold text-white text-3xl"
    {...rest}
  >
    {children}
  </button>
);

export default Button;
