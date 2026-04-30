import doSomethingThatTakesAges from "lib/doSomethingThatTakesAges";
import { type Dispatch, memo, type SetStateAction, useCallback, useMemo } from "react";
import type { AquaticAnimal } from "../whales";
import AnimalRow from "./AquaticAnimalRow";

type Props = {
  aquaticAnimals: AquaticAnimal[];
  bestFriend: AquaticAnimal;
  setBestFriend: Dispatch<SetStateAction<AquaticAnimal>>;
};

const AquaticAnimalTable = (
  { aquaticAnimals, bestFriend, setBestFriend }: Props,
) => {
  // artificially slow down rendering
  doSomethingThatTakesAges(500);

  const makeBestFriendAndSayHello = (animal: AquaticAnimal) => {
    setBestFriend(animal);
    const greeting = new SpeechSynthesisUtterance("Best friend updated");
    speechSynthesis.speak(greeting);
  };

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
                makeBestFriendAndSayHello={makeBestFriendAndSayHello}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(AquaticAnimalTable);
