import { useState } from "react";
import type { Whale } from "../lib/apiTypes";
import WhalesSonar from "./WhalesSonar/WhalesSonar";
import WhalesTable from "./WhalesTable/WhalesTable";
import Tab from "./components/Tab";

type Props = {
  whales: Whale[];
};

const App = ({ whales }: Props) => {
  const tab = "table";

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Whale Location Service</h1>
      <div className="shadow">
        <div className="flex">{/* TODO: add tabs */}</div>
        <div className="p-3">
          <WhalesTable whales={whales} />
        </div>
      </div>
    </div>
  );
};

export default App;
