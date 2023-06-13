import { type FC, useState } from "react"
import type { WhaleProps } from "./whales"
import Whale from "./Whale"
import NewWhaleForm from "./NewWhaleForm"

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
      <div className="flex gap-6">
        <div className="flex flex-col gap-3 w-2/3">
          {whales.map((whale) => (
            <Whale key={whale.id} {...whale} />
          ))}
          <NewWhaleForm addWhale={addWhale} />
        </div>
      </div>
    </div>
  )
}

export default App
