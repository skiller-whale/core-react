import type { Dispatch, SetStateAction } from "react"
import { useReducer, useState } from "react"
import type { Whale } from "../../lib/apiTypes"
import SonarDisplay from "../SonarDisplay"
import WhaleCard from "../WhaleCard"
import SonarControls from "./SonarControls"
import { initialState, reducer } from "./state/SonarState"

type Props = {
  whales: Whale[]
  selectedWhale: Whale
  setSelectedWhaleId: Dispatch<SetStateAction<Whale["id"]>>
  setSelectedWhaleX: (x: number) => void
  setSelectedWhaleY: (y: number) => void
}

const SonarDashboard = ({
  whales,
  selectedWhale,
  setSelectedWhaleId,
  setSelectedWhaleX,
  setSelectedWhaleY,
}: Props) => {
  const [sonarState, dispatchSonarAction] = useReducer(reducer, initialState)
  const { centerX, centerY, radius } = sonarState

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
        setSelectedWhaleId={setSelectedWhaleId}
      />
      <SonarControls dispatchSonarAction={dispatchSonarAction} />
      <WhaleCard
        whale={selectedWhale}
        setX={setSelectedWhaleX}
        setY={setSelectedWhaleY}
      />
    </div>
  )
}

export default SonarDashboard
