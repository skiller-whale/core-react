import { useState } from "react"
import Tab from "./components/Tab"
import WhalesTable from "./WhalesTable/WhalesTable"
import WhalesSonar from "./WhalesSonar/WhalesSonar"

const App = ({ whales }) => {
  const tab = "table"

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Whale Location Service</h1>
      <div className="shadow">
        <div className="flex">{/* TODO: add tabs */}</div>
        <div className="p-3">
          <WhalesTable whales={whales} />
        </div>
      </div>
    </div>
  )
}

export default App
