import { useState } from "react";
import type { Whale } from "../lib/apiTypes";
import SonarDashboard from "./SonarDashboard";

type Props = {
  initialWhales: Whale[];
};

const App = ({ initialWhales }: Props) => {
  const [whales, setWhales] = useState(initialWhales);
  const [selectedWhale, setSelectedWhale] = useState<Whale>(whales[0]);

  const updateWhaleCoordinate = (
    whale: Whale,
    coordinate: "x" | "y",
    value: number,
  ): Whale => ({
    ...whale,
    location: {
      ...whale.location,
      [coordinate]: Math.min(100, Math.max(-100, value)),
    },
  });

  const setSelectedWhaleX = (x: number) =>
    setSelectedWhale(updateWhaleCoordinate(selectedWhale, "x", x));

  const setSelectedWhaleY = (y: number) =>
    setSelectedWhale(updateWhaleCoordinate(selectedWhale, "y", y));

  return (
    <div className="flex justify-center">
      <SonarDashboard
        whales={whales}
        selectedWhale={selectedWhale}
        setSelectedWhale={setSelectedWhale}
        setSelectedWhaleX={setSelectedWhaleX}
        setSelectedWhaleY={setSelectedWhaleY}
      />
    </div>
  );
};

export default App;
