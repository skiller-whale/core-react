// not edited in this exercise
import { useEffect, useState } from "react"
import type { Whale } from "../../lib/apiTypes"
import DepthSonar from "../DepthSonar"
import ColorProvider from "../state/ColorContext"
import WhalesProvider, {
  updateWhaleCoordinate,
  useWhalesContext,
} from "../state/WhalesState"
import SonarDashboard from "./SonarDashboard"

const App = () => (
  <ColorProvider>
    <Panel />
  </ColorProvider>
)

const Panel = () => {
  // state values
  const [initialising, setInitialising] = useState(true)
  const [whales, setWhales] = useState<Whale[]>([])
  const [selectedWhaleId, setSelectedWhaleId] = useState<Whale["id"]>("")

  // state update functions
  const initialise = (whales: Whale[]) => {
    setInitialising(false)
    setWhales(whales)
    setSelectedWhaleId(whales[0].id)
  }

  const setSelectedWhaleX = (x: number) => {
    setWhales(
      whales.map((whale) =>
        whale.id === selectedWhaleId
          ? updateWhaleCoordinate(whale, "x", x)
          : whale,
      ),
    )
  }

  const setSelectedWhaleY = (y: number) => {
    setWhales(
      whales.map((whale) =>
        whale.id === selectedWhaleId
          ? updateWhaleCoordinate(whale, "y", y)
          : whale,
      ),
    )
  }

  // fetch whales from server on mount
  useEffect(() => {
    const fetchWhales = async () => {
      const response = await fetch("/api/aquatic-animals/whales/")
      const { animals } = await response.json()
      initialise(animals)
    }
    fetchWhales()
  }, [])

  // render placeholder until initialisation is complete
  if (initialising) {
    return (
      <div className="flex justify-center">
        <p>Initialising...</p>
      </div>
    )
  }

  // render the panel when initialisation is complete
  const selectedWhale = whales.find((whale) => whale.id === selectedWhaleId)!

  return (
    <div className="flex justify-center gap-3">
      <SonarDashboard
        whales={whales}
        selectedWhale={selectedWhale}
        setSelectedWhaleId={setSelectedWhaleId}
        setSelectedWhaleX={setSelectedWhaleX}
        setSelectedWhaleY={setSelectedWhaleY}
      />
      {/* <DepthSonar whale={selectedWhale} /> */}
    </div>
  )
}

export default App
