import { useRef, useState } from "react"
import RenameWhales from "./RenameWhales"
import ScrollableContainer from "./ScrollableContainer"
import Whale from "./Whale"
import WhaleInput from "./WhaleInput"

const App = ({ whales: initialWhales }) => {
  const [whales, setWhales] = useState(initialWhales)
  const setWhaleName = (id, name) => {
    const index = whales.findIndex((whale) => whale.id === id)
    const newWhale = { ...whales[index], name }
    const newWhales = whales.with(index, newWhale)
    setWhales(newWhales)
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Whale Weigh Platform</h1>
      <div className="flex gap-3 max-h-96 p-3 bg-slate-100">
        <ScrollableContainer>
          {whales.map((whale) => (
            <Whale key={whale.id} {...whale} />
          ))}
        </ScrollableContainer>
        <div className="flex flex-col gap-3 justify-between">
          <RenameWhales whales={whales} setWhaleName={setWhaleName} />
          <button className="bg-blue-500 text-white p-2 hover:bg-sky-700">
            Scroll to top of list
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
