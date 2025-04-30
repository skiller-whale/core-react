import type { Whale } from "lib/apiTypes";
import { useSetWhalesContext } from "./state/WhalesState";

type Props = {
  whale: Whale;
  setX: (x: number) => void;
  setY: (y: number) => void;
};

const WhaleCard = ({ whale, setX, setY }: Props) => {
  return (
    <div className="shadow p-4 flex flex-col gap-3">
      <h2 className="text-2xl font-semibold">
        {whale.name} the {whale.species}
      </h2>
      <div>Update location:</div>
      <div className="flex justify-between">
        <label>
          X:
          <input
            className="w-48 ml-2"
            id="x"
            type="number"
            value={whale.location.x}
            onChange={(e) => setX(Number(e.target.value))}
          />
        </label>
        <label>
          Y:
          <input
            className="w-48 ml-2"
            id="y"
            type="number"
            value={whale.location.y}
            onChange={(e) => setY(Number(e.target.value))}
          />{" "}
        </label>
      </div>
    </div>
  );
};

export default WhaleCard;
