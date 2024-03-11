type Props = {
  icon: string
  onClick: () => void
}

const Button = ({ icon, onClick }: Props) => (
  <button className={buttonStyle} onClick={onClick}>
    {icon}
  </button>
)

const buttonStyle = "p-3 bg-blue-600 hover:bg-blue-800 text-white w-12 h-12"

export default Button
