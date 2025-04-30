const Button = ({ onClick, children }) => (
  <button className={buttonStyle} onClick={onClick}>
    {children}
  </button>
);

const buttonStyle =
  "rounded w-12 h-12 bg-blue-600 hover:bg-blue-800 text-white text-3xl cursor-pointer";

export default Button;
