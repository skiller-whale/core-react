import { useCallback, useMemo, useState } from "react";
import AquaticAnimalTable from "./AquaticAnimalTable";
import type { AquaticAnimal } from "../whales";
import BestFriend from "./BestFriend";

type Props = {
  aquaticAnimals: AquaticAnimal[];
};

const App = ({ aquaticAnimals }: Props) => {
  const [aquaticMode, setAquaticMode] = useState(false);

  const [bestFriend, setBestFriend] = useState(aquaticAnimals[0]);

  const [maxRows, setMaxRows] = useState(20);
  const animalsToShow = useMemo(() => aquaticAnimals.slice(0, maxRows), [
    aquaticAnimals,
    maxRows,
  ]);

  return (
    <div
      className={`flex flex-col gap-3 p-6 bg-left-bottom bg-no-repeat ${
        aquaticMode ? "bg-gradient-to-b from-cyan-50 to-cyan-200" : ""
      }`}
    >
      <div className="flex justify-between gap-3">
        <h1 className="text-2xl font-semibold">Ada's friends</h1>
        <div className="flex gap-3 items-center">
          <label>Friends to show:</label>
          <input
            className="w-16"
            type="number"
            value={maxRows}
            onChange={(event) => setMaxRows(Number(event.currentTarget.value))}
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="cursor-pointer" htmlFor="aquaticMode">
            Aquatic mode
          </label>
          <input
            className="inline-block cursor-pointer"
            type="checkbox"
            id="aquaticMode"
            onChange={(event) => setAquaticMode(event.currentTarget.checked)}
            checked={aquaticMode}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {/* <BestFriend animal={bestFriend} /> */}
        <AquaticAnimalTable
          aquaticAnimals={animalsToShow}
          bestFriend={bestFriend}
          setBestFriend={setBestFriend}
        />
      </div>
    </div>
  );
};

export default App;
