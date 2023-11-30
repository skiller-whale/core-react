const GreenFilter = ({ children }) => (
  <div
    style={{
      filter:
        "invert(48%) sepia(51%) saturate(1516%) hue-rotate(86deg) brightness(97%) contrast(96%)",
    }}
  >
    {children}
  </div>
)

export default GreenFilter
