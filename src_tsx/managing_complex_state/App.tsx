import { useEffect, useState } from "react"
import type { Whale } from "../lib/apiTypes"
import DepthSonar from "./DepthSonar"
import SonarDashboard from "./SonarDashboard"
import ColorProvider from "./state/ColorContext"
import WhalesProvider, { useWhalesContext } from "./state/WhalesState"

const App = () => <Panel />

const Panel = () => {
  const [initialising, setInitialising] = useState(true)
  const [whales, setWhales] = useState<Whale[]>([])
  const [favWhale, setFavWhale] = useState<Whale>(whales[0])

  const fetchWhales = async () => {
    const response = await fetch("/api/aquatic-animals/whales/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })

    const { animals } = await response.json()
    setInitialising(false)
    setWhales(animals)
    setFavWhale(animals[0])
  }

  useEffect(() => {
    fetchWhales()
  }, [])

  const updateWhaleCoordinate = (
    whale: Whale,
    coordinate: "x" | "y",
    value: number,
  ): Whale => ({
    ...whale,
    location: {
      ...whale.location,
      [coordinate]: Math.min(100, Math.max(-100, value)),
    },
  })

  const setFavWhaleX = (x: number) =>
    setFavWhale(updateWhaleCoordinate(favWhale, "x", x))

  const setFavWhaleY = (y: number) =>
    setFavWhale(updateWhaleCoordinate(favWhale, "y", y))

  if (initialising) {
    return (
      <div className="flex justify-center">
        <p>Initialising...</p>
      </div>
    )
  }

  return (
    <div className="flex justify-center">
      <SonarDashboard
        whales={whales}
        favWhale={favWhale}
        setFavWhale={setFavWhale}
        setFavWhaleX={setFavWhaleX}
        setFavWhaleY={setFavWhaleY}
      />
      {/* <DepthSonar whale={favWhale} /> */}
    </div>
  )
}

export default App
