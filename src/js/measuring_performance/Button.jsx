import { useState } from "react"

const Button = ({ onClick, children }) => {
  const [hover, setHover] = useState(false)
  return (
    <button
      type="button"
      className={`py-2 px-3 text-white ${
        hover ? "bg-blue-800" : "bg-blue-600"
      }`}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  )
}
export default Button
