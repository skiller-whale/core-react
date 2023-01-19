import { type PropsWithChildren, useState } from "react"

type ButtonProps = PropsWithChildren<{
  onClick: () => void
}>

const Button = ({ onClick, children }: ButtonProps) => {
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
