const Button = ({ onClick, children }) => {
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
const doSomethingThatTakesAges = () => {
  let i = 0
  while (i < 10000000) {
    i++
  }
}
export default Button
