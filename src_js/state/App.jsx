import { useState } from "react";
import SonarDashboard from "./SonarDashboard";

const App = ({ initialWhales }) => {
  const [whales, setWhales] = useState(initialWhales);
  const [selectedWhale, setSelectedWhale] = useState(whales[0]);
  const updateWhaleCoordinate = (whale, coordinate, value) => ({
    ...whale,
    location: {
      ...whale.location,
      [coordinate]: Math.min(100, Math.max(-100, value)),
    },
  });

  const setSelectedWhaleX = (x) =>
    setSelectedWhale(updateWhaleCoordinate(selectedWhale, "x", x));

  const setSelectedWhaleY = (y) =>
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
