import { memo, useState, useTransition } from "react";
import type { Whale } from "lib/apiTypes";
import LoadingSpinner from "./LoadingSpinner";
import WhaleRow from "./WhaleRow";

type Props = {
  whales: Whale[];
};

const WhaleTable = ({ whales }: Props) => {
  const [hideDolphins, setHideDolphins] = useState(false);

  const whalesToDisplay = hideDolphins
    ? whales.filter((whale) => !whale.species.includes("Dolphin"))
    : whales;

  const onChange = () => setHideDolphins((hideDolphins) => !hideDolphins);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-2">List of whales</h2>
        <label className="flex text-xl font-semibold cursor-pointer items-baseline">
          <input
            className="m-3 cursor-pointer"
            type="checkbox"
            name="hideDolphins"
            onChange={onChange}
          />
          Hide dolphins?
        </label>
      </div>
      <table className="min-w-full">
        <thead className="border-b bg-gray-300 sticky top-0">
          <tr>
            <th className="w-36 grow-0 font-semibold py-2 px-3 text-center">
              Profile picture
            </th>
            <th className="font-semibold py-2 px-3 text-left">Name</th>
            <th className="font-semibold py-2 px-3 text-right">Weight</th>
            <th className="font-semibold py-2 px-3 text-xl text-center">🦷</th>
          </tr>
        </thead>
        <tbody>
          {whalesToDisplay.map((whale) => (
            <WhaleRow whale={whale} key={whale.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WhaleTable;
