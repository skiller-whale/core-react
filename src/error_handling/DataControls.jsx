import Button from "./components/Button"

const DataControls = ({ fetchWhales }) => (
  <div className="flex gap-3 space-around">
    <Button
      className="flex-1"
      onClick={() => fetchWhales("/api/aquatic-animals/whales")}
    >
      Fetch Good Data
    </Button>
    <Button
      className="flex-1"
      onClick={() => fetchWhales("/api/aquatic-animals/whales/bad")}
    >
      Fetch Bad Data
    </Button>
    <Button
      className="flex-1"
      onClick={() => fetchWhales("/api/aquatic-animals/whales/invalid")}
    >
      Fetch Invalid JSON
    </Button>
    <Button
      className="flex-1"
      onClick={() => fetchWhales("/api/aquatic-animals/whales/poor")}
    >
      Fetch Over Bad Connection
    </Button>
  </div>
)

export default DataControls
