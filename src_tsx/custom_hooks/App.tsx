import { type FC, useState } from "react"
import { type WhaleProps } from "./whales"
import Whale from "./Whale"
import NewWhaleForm from "./NewWhaleForm"
import FirstTimeSeen from "./FirstTimeSeen"

type Props = {
  whales: WhaleProps[]
}

const App: FC<Props> = ({ whales: initialWhales }) => {
  const [whales, setWhales] = useState(initialWhales)
  const addWhale = (whale: WhaleProps, position: number) => {
    if (whale.id) {
      setWhales((whales) => [
        ...whales.slice(0, position),
        whale,
        ...whales.slice(position),
      ])
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Whale Weigh Platform</h1>
      <div className="flex gap-3 items-start">
        <div className="flex flex-col gap-3">
          <div className="relative overflow-auto max-h-[75vh]">
            {whales.map((whale) => (
              <FirstTimeSeen
                key={whale.id}
                render={(ref, firstTimeSeen) => (
                  <Whale ref={ref} firstTimeSeen={firstTimeSeen} {...whale} />
                )}
              />
            ))}
          </div>
          <NewWhaleForm addWhale={addWhale} numberOfWhales={whales.length} />
        </div>
      </div>
    </div>
  )
}

export default App
