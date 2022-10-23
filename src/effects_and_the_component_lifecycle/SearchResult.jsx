import { useEffect, useState } from "react"
import { searchForWhale, whales } from "./whales"
import Searching from "./Searching"
import Whale from "./Whale"

let renders = 0

const SearchResult = ({ query }) => {
  const [searchStatus, setSearchStatus] = useState({
    status: "not-asked",
  })

  const loadResult = async () => {
    setSearchStatus({ status: "searching" })
    const whale = await searchForWhale(query)
    setSearchStatus({ status: "searched", whale })
  }

  return (
    <div className="mb-3">
      {searchStatus.status === "not-asked" ? (
        <div className="py-2">
          <p className="mb-3">Enter something into the box to search.</p>
          <p className="text-slate-700">
            (Valid search terms are:{" "}
            {whales.map((whale) => `"${whale.id}"`).join(", ")}.)
          </p>
        </div>
      ) : searchStatus.status === "searching" ? (
        <Searching />
      ) : searchStatus.whale ? (
        <Whale {...searchStatus.whale} />
      ) : (
        <p className="py-2">No matching whale.</p>
      )}
    </div>
  )
}

export default SearchResult
