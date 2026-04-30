import { memo } from "react";
import AnimalRow from "./AquaticAnimalRow";
import doSomethingThatTakesAges from "lib/doSomethingThatTakesAges";

const AquaticAnimalTable = ({ aquaticAnimals, bestFriend }) => {
  // artificially slow down rendering
  doSomethingThatTakesAges(500);

  return (
    <div>
      <div className="h-[75vh] overflow-auto">
        <table className="min-w-full">
          <thead className="border-b bg-gray-300 sticky top-0">
            <tr>
              <th className="font-semibold py-2 px-3">Profile picture</th>
              <th className="font-semibold py-2 px-3 text-left">Name</th>
              <th className="font-semibold py-2 px-3 text-left">Species</th>
              <th className="font-semibold py-2 px-3">Best Friend?</th>
            </tr>
          </thead>
          <tbody>
            {aquaticAnimals.map((animal) => (
              <AnimalRow
                key={animal.id}
                animal={animal}
                isBestFriend={animal === bestFriend}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AquaticAnimalTable;
