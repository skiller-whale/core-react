import { useState } from "react"
import type { Whale } from "../../lib/apiTypes"
import Button from "./Button"

type Props = {
  whales: Whale[]
}

const Sonar = ({ whales }: Props) => {
  const [centerX, setCentreX] = useState(0)
  const moveLeft = () => setCentreX((centerX) => Math.max(-100, centerX - 10))
  const moveRight = () => setCentreX((centerX) => Math.min(100, centerX + 10))

  const [centerY, setCentreY] = useState(0)
  const moveUp = () => setCentreY((centerY) => Math.max(-100, centerY - 10))
  const moveDown = () => setCentreY((centerY) => Math.min(100, centerY + 10))

  const [radius, setRadius] = useState(50)
  const zoomIn = () => setRadius((radius) => Math.max(20, radius - 10))
  const zoomOut = () => setRadius((radius) => Math.min(100, radius + 10))

  const visibleWhales = whales.filter(
    (whale) =>
      (whale.location.x - centerX) ** 2 + (whale.location.y - centerY) ** 2 <=
      radius ** 2,
  )

  const animals = visibleWhales.map((whale) => {
    const Icon = (
      <span className={`text-[${100 / radius}rem]`}>
        {whale.species.includes("Dolphin") ? "🐬" : "🐋"}
      </span>
    )

    const x = ((-(centerX - whale.location.x) * 100) / radius + 100) / 2
    const y = ((-(centerY - whale.location.y) * 100) / radius + 100) / 2

    return (
      <div key={whale.id} className={`absolute left-[${x}%] top-[${y}%]`}>
        <span>{Icon}</span>
      </div>
    )
  })

  return (
    <div className="flex flex-col gap-3 w-96 mx-auto my-6">
      <div className="relative">
        <div className="relative w-96 h-96 rounded-full overflow-hidden border-2">
          <div className="absolute top-0 bottom-0 w-full h-full bg-slate-100 opacity-30"></div>
          {animals}
        </div>
        <div className="absolute top-1/2 bottom-0 left-1/2 border-2 animate-[spin_4s_linear_infinite] origin-top-left"></div>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col gap-3">
          <Button onClick={zoomIn} className="w-12 h-12">
            +
          </Button>
          <Button onClick={zoomOut} className="w-12 h-12">
            -
          </Button>
        </div>
        <div className="flex gap-3 items-center">
          <Button onClick={moveLeft} className="w-12 h-12">
            ⇐
          </Button>
          <div className="flex flex-col gap-3">
            <Button onClick={moveUp} className="w-12 h-12">
              ⇑
            </Button>
            <Button onClick={moveDown} className="w-12 h-12">
              ⇓
            </Button>
          </div>
          <Button onClick={moveRight} className="w-12 h-12">
            ⇒
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Sonar
