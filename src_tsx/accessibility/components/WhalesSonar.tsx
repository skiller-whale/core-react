import type { KeyboardEvent } from "react"
import type { Whale } from "../../lib/apiTypes"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"
import useBoundedValue from "../hooks/useBoundedValue"
import Button from "./Button"
import WhalesSonarIcon from "./WhalesSonarIcon"

type Props = {
  whales: Whale[]
}

const Sonar = ({ whales }: Props) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const [centerX, moveLeft, moveRight] = useBoundedValue(0)
  const [centerY, moveUp, moveDown] = useBoundedValue(0)
  const [radius, zoomIn, zoomOut] = useBoundedValue(50, 20, 100)

  const visibleWhales = whales.filter(
    (whale) =>
      (whale.location.x - centerX) ** 2 + (whale.location.y - centerY) ** 2 <=
      radius ** 2,
  )

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    // complete this function
  }

  return (
    <div className="flex flex-col gap-3 w-96 mx-auto my-6">
      <div
        className="relative"
        onKeyUp={handleKeyPress}
        style={{
          filter:
            "invert(48%) sepia(51%) saturate(1516%) hue-rotate(86deg) brightness(97%) contrast(96%)",
        }}
      >
        <div className="relative w-96 h-96 rounded-full overflow-hidden border-2">
          <div className="absolute top-0 bottom-0 w-full h-full bg-slate-100 opacity-30"></div>
          {visibleWhales.map((whale) => (
            <WhalesSonarIcon
              key={whale.id}
              whale={whale}
              centerX={centerX}
              centerY={centerY}
              radius={radius}
            />
          ))}
        </div>
        {prefersReducedMotion ? null : (
          <div className="absolute top-1/2 bottom-0 left-1/2 border-2 animate-[spin_4s_linear_infinite] origin-top-left"></div>
        )}
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col gap-3">
          <Button onClick={zoomIn} aria-label="zoom in">
            +
          </Button>
          <Button onClick={zoomOut} aria-label="zoom-out">
            -
          </Button>
        </div>
        <div className="flex gap-3 items-center">
          <Button onClick={moveLeft} aria-label="move left">
            ⇐
          </Button>
          <div className="flex flex-col gap-3">
            <Button onClick={moveUp} aria-label="move up">
              ⇑
            </Button>
            <Button onClick={moveDown} aria-label="move down">
              ⇓
            </Button>
          </div>
          <Button onClick={moveRight} aria-label="move right">
            ⇒
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Sonar
