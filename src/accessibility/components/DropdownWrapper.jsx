const DropdownWrapper = ({ dropdownRef, children, ...rest }) => (
  <div onClick={() => dropdownRef.current?.close()} {...rest}>
    {children}
  </div>
)

export default DropdownWrapper
