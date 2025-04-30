import { type RefObject, useState, useRef, useEffect } from "react";
import type { Whale } from "lib/apiTypes";

type Props = {
  whale: Whale | null;
  updateSelectedWhale: (whale: Whale) => void;
};

const WhaleCard = ({ whale, updateSelectedWhale }: Props) => {
  const [focused, setFocused] = useState(false);

  const updateWhaleX = (x: number) => {
    if (whale === null) return;
    updateSelectedWhale({ ...whale, location: { ...whale.location, x } });
  };

  const updateWhaleY = (y: number) => {
    if (whale === null) return;
    updateSelectedWhale({ ...whale, location: { ...whale.location, y } });
  };

  return (
    <div className="shadow p-4 flex-1 flex flex-col gap-3">
      <h2 className="text-2xl font-semibold">
        {whale !== null
          ? `${whale.name} the ${whale.species}`
          : "Select a whale to update coordinates"}
      </h2>
      <div>Update location (X, Y):</div>
      <div
        className={`flex flex-1 border-2 ${
          focused ? "border-blue-500" : "border-gray-300"
        }`}
      >
        <input
          className="flex-1 border-none focus:border-none focus:ring-0"
          id="x"
          type="number"
          value={whale?.location.x ?? 0}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => updateWhaleX(Number(e.target.value))}
        />
        <input
          className="flex-1 border-none focus:border-none focus:ring-0"
          id="y"
          type="number"
          value={whale?.location.y ?? 0}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => updateWhaleY(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default WhaleCard;
