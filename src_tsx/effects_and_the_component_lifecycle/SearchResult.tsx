import { type FC, useEffect, useState } from "react"
import { type WhaleProps, searchForWhale, whales } from "./whales"
import Searching from "./Searching"
import Whale from "./Whale"

type Props = {
  query: string
}

type SearchStatus =
  | { status: "not-asked" }
  | { status: "searching" }
  | { status: "searched"; whale?: WhaleProps }

let renders = 0

const SearchResult: FC<Props> = ({ query }) => {
  const [searchStatus, setSearchStatus] = useState<SearchStatus>({
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
