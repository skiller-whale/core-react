import type { Whale } from "lib/apiTypes";
import useCurrentTime from "../hooks/useCurrentTime";

type Props = {
  whales: Whale[];
};

const InformationBoard = ({ whales }: Props) => {
  const currentTime = new Date();

  return (
    <div className="shadow p-4 flex-1 flex flex-col gap-3">
      <h2 className="text-2xl font-semibold">
        Information Board
      </h2>
      <div className="flex justify-between">
        <span>Current time:</span>
        <span className="font-mono">{currentTime.toLocaleTimeString()}</span>
      </div>
      <div className="flex justify-between">
        <span>Number of whales sighted:</span>
        <span className="font-mono">{whales.length}</span>
      </div>
    </div>
  );
};

export default InformationBoard;
