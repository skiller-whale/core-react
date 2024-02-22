import { useState } from "react"
import SonarDisplay from "./SonarDisplay"
import SonarControls from "./SonarControls"
import WhaleCard from "./WhaleCard"

const SonarDashboard = ({
  whales,
  selectedWhale,
  setSelectedWhale,
  setSelectedWhaleX,
  setSelectedWhaleY,
}) => {
  const centerX = 0
  const centerY = 0
  const radius = 50
  const visibleWhales = whales.filter(
    (whale) =>
      (whale.location.x - centerX) ** 2 + (whale.location.y - centerY) ** 2 <=
      radius ** 2,
  )

  return (
    <div className="flex flex-col gap-6">
      <SonarDisplay
        whales={visibleWhales}
        selectedWhale={selectedWhale}
        centerX={centerX}
        centerY={centerY}
        radius={radius}
        setSelectedWhale={setSelectedWhale}
      />
      <SonarControls />
      <WhaleCard
        whale={selectedWhale}
        setX={setSelectedWhaleX}
        setY={setSelectedWhaleY}
      />
    </div>
  )
}

export default SonarDashboard
