import { useState } from "react"
import { getNextWhale } from "./whales"
import Whale from "./Whale"

const App = ({ whales: initialWhales }) => {
  const [whales] = useState(initialWhales)
  const addWhale = async () => {
    const nextWhale = await getNextWhale()
    whales.push(nextWhale)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-semibold">Whale Weigh Platform</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700"
          onClick={addWhale}
        >
          Fetch Next Whale
        </button>
      </div>
      {whales.map((whale) => (
        <Whale key={whale.id} {...whale} />
      ))}
    </div>
  )
}

export default App
