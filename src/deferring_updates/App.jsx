import { useEffect, useState, useDeferredValue } from "react"
import WhaleTable from "./WhaleTable"
// import PromotionContainer from "./PromotionContainer"

const App = () => {
  const [term, setTerm] = useState("")

  const [fetching, setFetching] = useState(false)

  const [whales, setWhales] = useState([])

  const isStale = fetching

  const onChange = (event) => setTerm(event.target.value)

  useEffect(() => {
    const abortController = new AbortController()

    const fetchWhales = async () => {
      try {
        setFetching(true)
        const response = await fetch(
          `/api/aquatic-animals/whales/?term=${term}`,
          {
            signal: abortController.signal,
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        const { animals } = await response.json()
        setWhales(animals)
        setFetching(false)
      } catch (error) {
        if (error.name === "AbortError") return
        setFetching(false)
        throw error
      }
    }

    fetchWhales()

    return () => {
      abortController.abort()
    }
  }, [term])

  return (
    <div className="flex flex-col gap-3 p-6 m-[-2.5rem]">
      <h1 className="text-2xl font-semibold">Whale Weigh Platform</h1>
      <div className="flex gap-3 items-center mb-4">
        <div className="flex gap-3 justify-end">
          <input
            id="search"
            type="text"
            value={term}
            placeholder="Search..."
            className="border-2 border-gray-300 rounded-none px-2 py-1 h-10 cursor-pointer"
            onChange={onChange}
          />
          <label htmlFor="search" className="cursor-pointer text-3xl">
            🔎
          </label>
        </div>
      </div>

      <div className="flex justify-between gap-3">
        <div className={`w-2/3 ${isStale ? "grayscale" : ""}`}>
          <WhaleTable whales={whales} />
        </div>
        {/*<div className="w-1/3">*/}
        {/*  <PromotionContainer />*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default App
