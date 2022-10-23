import { useState } from "react"
import SearchResult from "./SearchResult"

const App = () => {
  const [query, setQuery] = useState("")

  const changeQuery = (event) => {
    setQuery(event.currentTarget.value)
  }

  return (
    <div className="m-6">
      <h1 className="text-2xl font-semibold mb-3">Find a Whale</h1>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Name of whale"
          value={query}
          onChange={changeQuery}
        />
      </div>
      <SearchResult query={query} />
    </div>
  )
}

export default App
