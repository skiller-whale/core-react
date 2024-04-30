import { useState } from "react"
import WhalesSonar from "../components/WhalesSonar"
import WhalesTable from "../components/WhalesTable"

const tabs = ["Table View", "Sonar View"]

const Tracker = ({ whales }) => {
  const [tab, setTab] = useState("Table View")

  return (
    <main className="shadow">
      <div className="flex">
        {tabs.map((tabName) => (
          <button
            key={tabName}
            role="link"
            className={`flex-1 p-3 ${tab === tabName ? "bg-gray-300 hover:bg-gray-400 hover:text-white focus:bg-gray-400 focus:text-white" : "bg-gray-100 hover:bg-gray-200 focus:bg-gray-200"} cursor-pointer`}
            onClick={() => setTab(tabName)}
          >
            {tabName}
          </button>
        ))}
      </div>
      <div className="p-3">
        {tab === "Table View" ? (
          <WhalesTable whales={whales} />
        ) : tab === "Sonar View" ? (
          <WhalesSonar whales={whales} />
        ) : null}
      </div>
    </main>
  )
}

export default Tracker
