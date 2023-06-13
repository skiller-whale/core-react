import { type FC, useState } from "react"
import { type WhaleProps, getNextWhale } from "./whales"
import Whale from "./Whale"
import { ErrorBoundary, ErrorMessage } from "./Error"

type Props = {
  whales: WhaleProps[]
}

const App: FC<Props> = ({ whales: initialWhales }) => {
  const [whales, setWhales] = useState(initialWhales)
  const [error, setError] = useState<string | null>(null)

  const addWhale = async () => {
    setError(null)

    const nextWhaleJSON = await getNextWhale()
    const nextWhale = JSON.parse(nextWhaleJSON)
    setWhales((whales) => [...whales, nextWhale])
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <h1 className="text-2xl font-semibold flex-1">Whale Weigh Platform</h1>
        {error ? <ErrorMessage message={error} /> : null}
        <button
          className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700"
          onClick={addWhale}
        >
          Fetch Next Whale
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {whales.map((whale) => (
          <Whale {...whale} />
        ))}
      </div>
    </div>
  )
}

export default App
