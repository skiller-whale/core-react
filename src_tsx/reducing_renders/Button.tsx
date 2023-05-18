import { type PropsWithChildren } from "react"

type ButtonProps = PropsWithChildren<{
  onClick: () => void
}>

const Button = ({ onClick, children }: ButtonProps) => {
  doSomethingThatTakesAges()
  return (
    <button
      type="button"
      className="py-2 px-3 text-white bg-blue-600 hover:bg-blue-800"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const doSomethingThatTakesAges = (delay: number = 500) => {
  for (const start = performance.now(); performance.now() < start + delay; ) {}
}

export default Button
