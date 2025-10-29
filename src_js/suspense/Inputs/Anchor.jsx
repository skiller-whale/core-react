const Anchor = ({ children, ...rest }) => (
  <a className="underline text-blue-600 cursor-pointer" {...rest}>
    {children}
  </a>
);

export default Anchor;
