import { memo } from "react";
import type { AquaticAnimal } from "../whales";
import doSomethingThatTakesAges from "lib/doSomethingThatTakesAges";

type Props = {
  animal: AquaticAnimal;
  isBestFriend: boolean;
};

const AquaticAnimalRow = ({ animal, isBestFriend }: Props) => {
  // artificially slow down rendering
  doSomethingThatTakesAges(50);

  const profilePicture = animal.isWhale
    ? animal.species.includes("Dolphin") ? "🐬" : "🐳"
    : "🐠";

  return (
    <tr className="border-b even:bg-gray-100">
      <td className="py-2 px-3 text-4xl text-center">{profilePicture}</td>
      <td className="py-2 px-3">{animal.name}</td>
      <td className="py-2 px-3">{animal.species}</td>
      <td className="py-2 px-3 text-center">{isBestFriend ? "✅" : null}</td>
    </tr>
  );
};

export default AquaticAnimalRow;
