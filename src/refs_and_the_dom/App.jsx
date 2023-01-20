import { useRef, useState } from "react"
import Whale from "./Whale"
import RenameWhales from "./RenameWhales"
import NewWhaleForm from "./NewWhaleForm"

const App = ({ whales: initialWhales }) => {
  const [whales, setWhales] = useState(initialWhales)

  const setWhaleName = (id, name) => {
    const index = whales.findIndex((whale) => whale.id === id)
    const newWhale = { ...whales[index], name }
    const newWhales = [
      ...whales.slice(0, index),
      newWhale,
      ...whales.slice(index + 1),
    ]
    setWhales(newWhales)
  }

  const addWhale = (whale) => {
    if (whale.id) {
      setWhales((whales) => [...whales, whale])
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Whale Weigh Platform</h1>
      <div className="flex gap-3 items-start">
        <div className="flex flex-col gap-3">
          {whales.map((whale) => (
            <Whale key={whale.id} {...whale} />
          ))}
          <NewWhaleForm addWhale={addWhale} />
        </div>
        <RenameWhales whales={whales} setWhaleName={setWhaleName} />
      </div>
    </div>
  )
}

export default App
