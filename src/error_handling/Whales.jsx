import { useState } from "react"
import { ErrorBoundary } from "react-error-boundary"
import ErrorDisplay from "./components/ErrorDisplay"
import WhalesSonar from "./components/WhalesSonar"
import WhalesTable from "./components/WhalesTable"

const Whales = ({ loading, whales }) => {
  const [tab, setTab] = useState("table")
  const showTable = () => setTab("table")
  const showSonar = () => setTab("sonar")

  return (
    <div className="shadow">
      <div className="flex">
        <a
          className={`flex-1 p-3 ${tab === "table" ? "bg-gray-300" : "bg-gray-100"} cursor-pointer`}
          onClick={showTable}
        >
          Table View
        </a>
        <a
          className={`flex-1 p-3 ${tab === "sonar" ? "bg-gray-300" : "bg-gray-100"} cursor-pointer`}
          onClick={showSonar}
        >
          Sonar View
        </a>
      </div>
      <div className="p-3">
        {loading ? (
          "Loading..."
        ) : whales.length === 0 ? (
          "No whales to display. Use the buttons to fetch some data."
        ) : tab === "table" ? (
          <WhalesTable whales={whales} />
        ) : (
          <WhalesSonar whales={whales} />
        )}
      </div>
    </div>
  )
}

export default Whales
