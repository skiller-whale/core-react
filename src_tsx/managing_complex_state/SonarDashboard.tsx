import type { Dispatch, FC, Reducer, SetStateAction } from "react"
import { useReducer, useState } from "react"
import type { Whale } from "../lib/apiTypes"
import Sonar from "./Sonar"
import WhaleCard from "./WhaleCard"

type SonarDashboardType = {
  whales: Whale[]
  favWhale: Whale
  setFavWhale: Dispatch<SetStateAction<Whale>>
  setFavWhaleX: (x: number) => void
  setFavWhaleY: (y: number) => void
}

const SonarDashboard: FC<SonarDashboardType> = ({
  whales,
  favWhale,
  setFavWhale,
  setFavWhaleX,
  setFavWhaleY,
}) => {
  const [centerX, setCentreX] = useState(0)
  const [centerY, setCentreY] = useState(0)
  const [radius, setRadius] = useState(50)

  const visibleWhales = whales.filter(
    (whale) =>
      (whale.location!.x - centerX) ** 2 + (whale.location!.y - centerY) ** 2 <=
      radius ** 2
  )

  const zoomIn = () => setRadius((radius) => Math.max(20, radius - 10))
  const zoomOut = () => setRadius((radius) => Math.min(100, radius + 10))

  const moveLeft = () => setCentreX((centerX) => Math.max(-100, centerX - 10))
  const moveRight = () => setCentreX((centerX) => Math.min(100, centerX + 10))
  const moveUp = () => setCentreY((centerY) => Math.max(-100, centerY - 10))
  const moveDown = () => setCentreY((centerY) => Math.min(100, centerY + 10))

  return (
    <div className="flex flex-col px-2">
      <Sonar
        whales={visibleWhales}
        favWhale={favWhale}
        centerX={centerX}
        centerY={centerY}
        radius={radius}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        moveLeft={moveLeft}
        moveRight={moveRight}
        moveUp={moveUp}
        moveDown={moveDown}
        setFavWhale={setFavWhale}
      />
      <WhaleCard {...favWhale} setX={setFavWhaleX} setY={setFavWhaleY} />
    </div>
  )
}

export default SonarDashboard
