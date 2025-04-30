import { useState } from "react";
import useBoundedValue from "./hooks/useBoundedValue";
import useCursor from "./hooks/useCursor";
import InformationBoard from "./SonarDashboard/InformationBoard";
import SonarControls from "./SonarDashboard/SonarControls";
import SonarDisplay from "./SonarDashboard/SonarDisplay";
import WhaleCard from "./SonarDashboard/WhaleCard";

const App = ({ initialWhales }) => {
  const [whales, setWhales] = useState(initialWhales);
  const [cursor, setCursor] = useState(-1);

  const selectWhale = (whale) => {
    const index = whale === null ? -1 : whales.indexOf(whale);
    setCursor(index);
  };

  const selectedWhale = whales[cursor] ?? null;

  const updateSelectedWhale = (whale) => {
    if (selectedWhale !== null) {
      setWhales([...whales.slice(0, cursor), whale, ...whales.slice(cursor + 1)]);
    }
  };

  const [centerX, moveLeft, moveRight] = useBoundedValue(0, -100, 100);
  const [centerY, moveUp, moveDown] = useBoundedValue(0, -100, 100);
  const [radius, zoomIn, zoomOut] = useBoundedValue(50, 20, 100);

  return (
    <div className="flex gap-6">
      <div className="flex flex-1 flex-col gap-6">
        <SonarDisplay
          whales={whales}
          selectedWhale={selectedWhale}
          centerX={centerX}
          centerY={centerY}
          radius={radius}
          selectWhale={selectWhale}
        />
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <InformationBoard whales={whales} />
        <WhaleCard
          whale={selectedWhale}
          updateSelectedWhale={updateSelectedWhale}
        />
        <SonarControls
          moveLeft={moveLeft}
          moveUp={moveUp}
          moveRight={moveRight}
          moveDown={moveDown}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
        />
      </div>
    </div>
  );
};

export default App;
