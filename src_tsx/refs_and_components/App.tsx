import { type FC, useState, useRef } from "react"
import { type WhaleProps } from "./whales"
import Whale from "./Whale"
import NewWhaleForm from "./NewWhaleForm"
import ScrollableContainer from "./ScrollableContainer"
import type { Ref as ScrollableContainerRef } from "./ScrollableContainer"
import ScrollableContainerClass from "./ScrollableContainerClass"

type Props = {
  whales: WhaleProps[]
}

const App: FC<Props> = ({ whales: initialWhales }) => {
  const [whales, setWhales] = useState(initialWhales)

  const addWhale = (whale: WhaleProps) => {
    if (whale.id) {
      setWhales((whales) => [...whales, whale])
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Whale Weigh Platform</h1>
      <div className="flex gap-3 items-start">
        <div className="flex flex-col gap-3">
          <ScrollableContainerClass>
            {whales.map((whale) => (
              <Whale key={whale.id} {...whale} />
            ))}
          </ScrollableContainerClass>
          <button className="self-end bg-blue-500 text-white p-2 hover:bg-blue-700">
            Scroll to top of list
          </button>
          <NewWhaleForm addWhale={addWhale} />
        </div>
      </div>
    </div>
  )
}

export default App
