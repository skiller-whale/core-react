import useWhales from "./hooks/useWhales";
import useBoundedValue from "./hooks/useBoundedValue";
import SonarControls from "./SonarDashboard/SonarControls";
import SonarDisplay from "./SonarDashboard/SonarDisplay";

const App = ({ initialWhales }) => {
  const whales = initialWhales;

  const [centerX, moveLeft, moveRight] = useBoundedValue(0, -100, 100);
  const [centerY, moveUp, moveDown] = useBoundedValue(0, -100, 100);
  const [radius, zoomIn, zoomOut] = useBoundedValue(50, 20, 100);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-6">
        <SonarDisplay
          whales={whales}
          centerX={centerX}
          centerY={centerY}
          radius={radius}
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
