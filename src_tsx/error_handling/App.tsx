import { useState } from "react"
import { ErrorBoundary } from "react-error-boundary"
import type { Whale } from "../lib/apiTypes"
import DataControls from "./DataControls"
import Whales from "./Whales"
import ErrorDisplay from "./components/ErrorDisplay"
import fetch from "./utils/fetch"

const App = () => {
  const [whales, setWhales] = useState<Whale[]>([])
  const [loading, setLoading] = useState(false)
  const fetchWhales = async (path: string) => {
    setLoading(true)

    const result = await fetch(path)
    const { animals } = await result.json()
    setWhales(animals)
    setLoading(false)
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">Whale Location Service</h1>
      <DataControls fetchWhales={fetchWhales} />
      <Whales loading={loading} whales={whales} />
    </div>
  )
}

const SafeApp = () => <App />

export default SafeApp
