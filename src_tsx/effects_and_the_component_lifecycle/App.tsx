import { type FC, useState, ChangeEventHandler } from "react"
import SearchResult from "./SearchResult"

const App: FC = () => {
  const [query, setQuery] = useState("")

  const changeQuery: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.currentTarget.value)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-semibold">Whale Weigh Platform</h1>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={changeQuery}
        />
      </div>
      <SearchResult query={query} />
    </div>
  )
}

export default App
