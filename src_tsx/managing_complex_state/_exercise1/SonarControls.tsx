import type { Dispatch } from "react"
import type { SonarAction } from "./state/SonarState"

type Props = {
  dispatchSonarAction: Dispatch<SonarAction>
}

const Sonar = ({ dispatchSonarAction }: Props) => (
  <div className="shadow p-4 flex flex-col gap-3">
    <div className="flex justify-around mt-3">
      <div className="flex flex-col gap-3">
        <Button onClick={() => dispatchSonarAction({ type: "zoomIn" })}>
          +
        </Button>
        <Button onClick={() => dispatchSonarAction({ type: "zoomOut" })}>
          -
        </Button>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Button onClick={() => dispatchSonarAction({ type: "moveLeft" })}>
          ⇐
        </Button>
        <div className="flex flex-col gap-3">
          <Button onClick={() => dispatchSonarAction({ type: "moveUp" })}>
            ⇑
          </Button>
          <Button onClick={() => dispatchSonarAction({ type: "moveDown" })}>
            ⇓
          </Button>
        </div>
        <Button onClick={() => dispatchSonarAction({ type: "moveRight" })}>
          ⇒
        </Button>
      </div>
    </div>
  </div>
)

type ButtonProps = {
  onClick: () => void
  children: string
}

const Button = ({ onClick, children }: ButtonProps) => (
  <button
    onClick={onClick}
    className="rounded w-12 h-12 bg-blue-600 hover:bg-blue-800 font-semibold text-white text-3xl"
  >
    {children}
  </button>
)

export default Sonar
