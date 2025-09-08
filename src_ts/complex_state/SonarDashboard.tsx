import {
  type Dispatch,
  type SetStateAction,
  useReducer,
  useState,
} from "react";
import type { Whale } from "lib/apiTypes";
import SonarControls from "./SonarControls";
import SonarDisplay from "./SonarDisplay";
import WhaleCard from "./WhaleCard";
import { initialState, reducer } from "./state/SonarState";

type Props = {
  whales: Whale[];
  selectedWhale: Whale;
  setSelectedWhaleId: Dispatch<SetStateAction<Whale["id"]>>;
  setSelectedWhaleX: (x: number) => void;
  setSelectedWhaleY: (y: number) => void;
};

const SonarDashboard = ({
  whales,
  selectedWhale,
  setSelectedWhaleId,
  setSelectedWhaleX,
  setSelectedWhaleY,
}: Props) => {
  const [centerX, setCenterX] = useState(0);
  const moveLeft = () => setCenterX(Math.max(-100, centerX - 10));
  const moveRight = () => setCenterX(Math.min(100, centerX + 10));

  const [centerY, setCenterY] = useState(0);
  const moveUp = () => setCenterY(Math.max(-100, centerY - 10));
  const moveDown = () => setCenterY(Math.min(100, centerY + 10));

  const [radius, setRadius] = useState(50);
  const zoomIn = () => setRadius(Math.max(20, radius - 10));
  const zoomOut = () => setRadius(Math.min(100, radius + 10));

  const visibleWhales = whales.filter(
    (whale) =>
      (whale.location.x - centerX) ** 2 + (whale.location.y - centerY) ** 2 <=
      radius ** 2,
  );

  return (
    <div className="flex flex-col gap-6">
      <SonarDisplay
        whales={visibleWhales}
        selectedWhale={selectedWhale}
        centerX={centerX}
        centerY={centerY}
        radius={radius}
        setSelectedWhaleId={setSelectedWhaleId}
      />
      <SonarControls
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        moveLeft={moveLeft}
        moveRight={moveRight}
        moveUp={moveUp}
        moveDown={moveDown}
      />
      <WhaleCard
        whale={selectedWhale}
        setX={setSelectedWhaleX}
        setY={setSelectedWhaleY}
      />
    </div>
  );
};

export default SonarDashboard;
