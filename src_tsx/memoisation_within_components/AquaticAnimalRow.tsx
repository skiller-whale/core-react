import { memo } from "react";
import doSomethingThatTakesAges from "../lib/doSomethingThatTakesAges";
import type { AquaticAnimal } from "./whales";

const ARTIFICIALLY_SLOW = false;

type Props = {
  animal: AquaticAnimal;
  isBestFriend: boolean;
  setBestFriend: (animal: AquaticAnimal) => void;
};

const AquaticAnimalRow = ({ animal, isBestFriend, setBestFriend }: Props) => {
  if (ARTIFICIALLY_SLOW) {
    doSomethingThatTakesAges(10);
  }

  const profilePicture = animal.isWhale
    ? animal.species.includes("Dolphin")
      ? "🐬"
      : "🐳"
    : "🐠";

  return (
    <tr className="border-b even:bg-gray-100">
      <td className="py-2 px-3 text-4xl text-center">{profilePicture}</td>
      <td className="py-2 px-3">{animal.name}</td>
      <td className="py-2 px-3">{animal.species}</td>
      <td className="py-2 px-3 text-center">
        {isBestFriend ? (
          "✅"
        ) : (
          <button
            className="py-2 px-3 text-white bg-blue-600 hover:bg-blue-800"
            onClick={() => setBestFriend(animal)}
          >
            Make best friend
          </button>
        )}
      </td>
    </tr>
  );
};

export default memo(AquaticAnimalRow);
