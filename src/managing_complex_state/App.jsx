import { useEffect, useState } from "react"
import DepthSonar from "./DepthSonar"
import SonarDashboard from "./SonarDashboard"
import ColorProvider from "./state/ColorContext"
import WhalesProvider, {
  updateWhaleCoordinate,
  useWhalesContext,
} from "./state/WhalesState"

const App = () => (
  <ColorProvider>
    <Panel />
  </ColorProvider>
)

const Panel = () => {
  // state values
  const [initialising, setInitialising] = useState(true)
  const [whales, setWhales] = useState([])
  const [selectedWhaleId, setSelectedWhaleId] = useState("")
  // state update functions
  const initialise = (whales) => {
    setInitialising(false)
    setWhales(whales)
    setSelectedWhaleId(whales[0].id)
  }

  const setSelectedWhaleX = (x) => {
    setWhales(
      whales.map((whale) =>
        whale.id === selectedWhaleId
          ? updateWhaleCoordinate(whale, "x", x)
          : whale,
      ),
    )
  }

  const setSelectedWhaleY = (y) => {
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
  const selectedWhale = whales.find((whale) => whale.id === selectedWhaleId)

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
