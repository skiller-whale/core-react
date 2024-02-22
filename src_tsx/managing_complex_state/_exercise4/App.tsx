import { useEffect, useState } from "react"
import type { Whale } from "../../lib/apiTypes"
import DepthSonar from "../_exercise3/DepthSonar"
import ColorProvider from "../_exercise3/state/ColorContext"
import SonarDashboard from "./SonarDashboard"
import WhalesProvider, {
  updateWhaleCoordinate,
  useWhalesContext,
} from "./state/WhalesState"

const App = () => (
  <WhalesProvider>
    <ColorProvider>
      <Panel />
    </ColorProvider>
  </WhalesProvider>
)

const Panel = () => {
  const state = useWhalesContext()

  if (state.initialising) {
    return (
      <div className="flex justify-center">
        <p>Initialising...</p>
      </div>
    )
  }

  const selectedWhale = state.whales.find(
    (whale) => whale.id === state.selectedWhaleId,
  )!

  return (
    <div className="flex justify-center gap-3">
      <SonarDashboard whales={state.whales} selectedWhale={selectedWhale} />
      <DepthSonar whale={selectedWhale} />
    </div>
  )
}

export default App
