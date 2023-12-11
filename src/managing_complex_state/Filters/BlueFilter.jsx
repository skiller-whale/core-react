const BlueFilter = ({ children }) => (
  <span
    style={{
      filter:
        "invert(9%) sepia(100%) saturate(7470%) hue-rotate(248deg) brightness(89%) contrast(145%)",
    }}
  >
    {children}
  </span>
)

export default BlueFilter
