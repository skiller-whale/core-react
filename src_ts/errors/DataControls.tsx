import Button from "./components/Button";

type Props = {
  fetchWhales: (path: string) => void;
};

const DataControls = ({ fetchWhales }: Props) => (
  <div className="flex gap-3 space-around">
    <Button
      className="flex-1"
      onClick={() => fetchWhales("/api/whales")}
    >
      Fetch Good Data
    </Button>
    <Button
      className="flex-1"
      onClick={() => fetchWhales("/api/whales/bad")}
    >
      Fetch Bad Data
    </Button>
    <Button
      className="flex-1"
      onClick={() => fetchWhales("/api/whales/invalid")}
    >
      Fetch Invalid JSON
    </Button>
    <Button
      className="flex-1"
      onClick={() => fetchWhales("/api/whales/poor")}
    >
      Fetch Over Bad Connection
    </Button>
  </div>
);

export default DataControls;
