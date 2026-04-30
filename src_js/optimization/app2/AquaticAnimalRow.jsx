import { memo, useCallback, useMemo } from "react";
import doSomethingThatTakesAges from "lib/doSomethingThatTakesAges";

const AquaticAnimalRow = ({
  animal,
  isBestFriend,
  makeBestFriendAndSayHello,
}) => {
  // artificially slow down rendering
  doSomethingThatTakesAges(50);

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
            onClick={() => makeBestFriendAndSayHello(animal)}
          >
            Make best friend
          </button>
        )}
      </td>
    </tr>
  );
};

export default memo(AquaticAnimalRow);
