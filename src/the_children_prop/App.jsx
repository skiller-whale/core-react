import { useState } from "react"
import { getNextWhale } from "./whales"
import Whale from "./Whale"
import { Accordion, AccordionChild } from "./Accordion"
import { Button, CollapsibleContainer } from "./styles"

const App = ({ whales: initialWhales }) => {
  const [whales, setWhales] = useState(initialWhales)
  const addWhale = async () => {
    const nextWhale = await getNextWhale()
    setWhales((whales) => [...whales, nextWhale])
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
