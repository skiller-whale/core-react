import { Component } from "react"
import { type WhaleProps, searchForWhale, whales } from "./whales"
import Searching from "./Searching"
import Whale from "./Whale"

type Props = {
  query: string
}

type State = {
  searchId: number
  searchStatus: SearchStatus
}

type SearchStatus =
  | { status: "not-asked" }
  | { status: "searching" }
  | { status: "searched"; whale?: WhaleProps }

class SearchResult extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      searchId: 0,
      searchStatus: { status: "not-asked" },
    }
  }

  search() {
    const searchId = this.state.searchId + 1
    this.setState({ searchId })

    const loadResult = async () => {
      this.setState({ searchStatus: { status: "searching" } })
      const whale = await searchForWhale(this.props.query)
      if (this.state.searchId === searchId) {
        this.setState({ searchStatus: { status: "searched", whale } })
      }
    }

    if (this.props.query) {
      loadResult()
    } else {
      this.setState({ searchStatus: { status: "not-asked" } })
    }
  }

  render() {
    return (
      <div className="mb-3">
        {this.state.searchStatus.status === "not-asked" ? (
          <div className="py-2">
            <p className="mb-3">Enter something into the box to search.</p>
            <p className="text-slate-700">
              (Valid search terms are:{" "}
              {whales.map((whale) => `"${whale.id}"`).join(", ")}.)
            </p>
          </div>
        ) : this.state.searchStatus.status === "searching" ? (
          <Searching />
        ) : this.state.searchStatus.whale ? (
          <Whale {...this.state.searchStatus.whale} />
        ) : (
          <p className="py-2">No matching whale.</p>
        )}
      </div>
    )
  }
}

export default SearchResult
