import { type ChangeEvent, useMemo, useState } from "react";
import AquaticAnimalTable from "./AquaticAnimalTable";
import type { AquaticAnimal } from "../whales";

type Props = {
  aquaticAnimals: AquaticAnimal[];
};

const App = ({ aquaticAnimals }: Props) => {
  const [aquaticMode, setAquaticMode] = useState(false);

  const [bestFriend, setBestFriend] = useState(aquaticAnimals[0]);
  const updateBestFriend = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.currentTarget.value;
    const selectedAnimal = aquaticAnimals.find((animal) => animal.id === selectedId);
    if (selectedAnimal) {
      setBestFriend(selectedAnimal);
    }
  };

  const [maxRows, setMaxRows] = useState(20);
  const animalsToShow = aquaticAnimals.slice(0, maxRows);

  return (
    <div
      className={`flex flex-col gap-3 p-6 bg-left-bottom bg-no-repeat ${
        aquaticMode ? "bg-gradient-to-b from-cyan-50 to-cyan-200" : ""
      }`}
    >
      <div className="flex justify-between gap-3">
        <h1 className="text-2xl font-semibold">Ada's friends</h1>
        <div className="flex gap-3 items-center">
          <label className="cursor-pointer" htmlFor="bestFriend">Best Friend:</label>
          <select id="bestFriend" value={bestFriend.id} onChange={updateBestFriend}>
            {aquaticAnimals.map((animal) => (
              <option key={animal.id} value={animal.id}>
                {animal.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="cursor-pointer" htmlFor="maxRows">Friends to show:</label>
          <input
            id="maxRows"
            className="w-16"
            type="number"
            value={maxRows}
            min={1}
            max={aquaticAnimals.length}
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
        <AquaticAnimalTable aquaticAnimals={animalsToShow} bestFriend={bestFriend} />
      </div>
    </div>
  );
};

export default App;
