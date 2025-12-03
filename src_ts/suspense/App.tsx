import { Suspense, useState } from "react";
import { getWhales } from "./api";
import ErrorSuspenseBoundary from "./Suspense/ErrorSuspenseBoundary";
import LoadingSpinner from "./Suspense/LoadingSpinner";
import Checkbox from "./Inputs/Checkbox";
import Input from "./Inputs/Input";
import TermsAndConditions from "./TermsAndConditions/TermsAndConditions";
import WhaleTable from "./WhaleTable/WhaleTable";

const App = () => {
  const [simulateNetworkError, setSimulateNetworkError] = useState(false);
  const [query, setQuery] = useState("");
  const whalesPromise = getWhales(query, simulateNetworkError);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Whale Location Service</h1>
      <div className="flex flex-col gap-3 shadow-md p-4">
        <div className="flex gap-3 items-baseline">
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter by name/species"
            aria-label="Filter by name/species"
          />
          <Checkbox
            label="Simulate Network Error"
            checked={simulateNetworkError}
            onChange={() => setSimulateNetworkError(!simulateNetworkError)}
          />
        </div>
        <TermsAndConditions />
      </div>
      <div className="flex flex-col gap-3 p-3 shadow-md">
        <h2 className="text-lg font-semibold">Recent Sightings</h2>
        <WhaleTable query={query} whalesPromise={whalesPromise} />
      </div>
    </div>
  );
};

export default App;
