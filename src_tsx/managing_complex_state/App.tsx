import { useEffect, useState } from "react"
import type { Whale } from "../lib/apiTypes"
import DepthSonar from "./DepthSonar"
import ColorContext, { SetColorContext, type color } from "./ColorContext"

import SonarDashboard from "./SonarDashboard"

const App = () => {
  const [whales, setWhales] = useState<Whale[]>([])

  const fetchWhales = async () => {
    const response = await fetch(`/api/aquatic-animals/whales/?term=`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })

    const { animals } = await response.json()
    setWhales(animals)
    setFavWhale(animals[0])
  }

  useEffect(() => {
    setWhales([])
    fetchWhales()
  }, [])

  const [favWhale, setFavWhale] = useState<Whale>(whales[0])

  const setFavWhaleX = (x: number) =>
    setFavWhale({
      ...favWhale,
      location: { ...favWhale.location!, x: Math.min(100, Math.max(-100, x)) },
    })

  const setFavWhaleY = (y: number) =>
    setFavWhale({
      ...favWhale,
      location: { ...favWhale.location!, y: Math.min(100, Math.max(-100, y)) },
    })

  return whales.length > 0 ? (
    <div className="flex">
      <SonarDashboard
        whales={whales}
        favWhale={favWhale}
        setFavWhale={setFavWhale}
        setFavWhaleX={setFavWhaleX}
        setFavWhaleY={setFavWhaleY}
      />
      {/*<DepthSonar whale={favWhale} />*/}
    </div>
  ) : (
    <div>"Loading..."</div>
  )
}

export default App
