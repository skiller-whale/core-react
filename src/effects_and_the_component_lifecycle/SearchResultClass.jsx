import { Component } from "react"
import { searchForWhale, whales } from "./whales"
import Searching from "./Searching"
import Whale from "./Whale"

class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchStatus: { status: "not-asked" },
    }
  }
  search() {
    const loadResult = async () => {
      this.setState({ searchStatus: { status: "searching" } })

      const whale = await searchForWhale(this.props.query)
      this.setState({ searchStatus: { status: "searched", whale } })
    }
    if (this.props.query) {
      loadResult()
    } else {
      this.setState({ searchStatus: { status: "not-asked" } })
    }
  }
  render() {
    return (
      <div className="border border-gray-300 p-3 mb-3">
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
