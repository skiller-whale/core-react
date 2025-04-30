import { type Dispatch, type SetStateAction, useState } from "react";
import type { Whale } from "lib/apiTypes";
import SonarControls from "./SonarControls";
import SonarDisplay from "./SonarDisplay";
import WhaleCard from "./WhaleCard";

type Props = {
  whales: Whale[];
  selectedWhale: Whale;
  setSelectedWhale: Dispatch<SetStateAction<Whale>>;
  setSelectedWhaleX: (x: number) => void;
  setSelectedWhaleY: (y: number) => void;
};

const SonarDashboard = ({
  whales,
  selectedWhale,
  setSelectedWhale,
  setSelectedWhaleX,
  setSelectedWhaleY,
}: Props) => {
  const centerX = 0;
  const centerY = 0;
  const radius = 50;

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
        setSelectedWhale={setSelectedWhale}
      />
      <SonarControls />
      <WhaleCard
        whale={selectedWhale}
        setX={setSelectedWhaleX}
        setY={setSelectedWhaleY}
      />
    </div>
  );
};

export default SonarDashboard;
