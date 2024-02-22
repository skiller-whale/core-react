import type { FallbackProps } from "react-error-boundary"
import { FaXmark } from "react-icons/fa6"

type Props = Partial<FallbackProps> & {
  component: string
}

const ErrorDisplay = ({ component, error }: Props) => (
  <div className="shadow">
    <div className="flex justify-between p-3 bg-red-700 text-white font-semibold">
      <h4>Oh no, the {component} component has crashed!</h4>
      <button>
        <FaXmark size={20} />
      </button>
    </div>
    <div className="p-3 flex flex-col gap-3">
      <p>This was because of a {error.name}.</p>
      <p className="p-3 border bg-gray-100 monospace">{error.message}</p>
    </div>
  </div>
)

export default ErrorDisplay
