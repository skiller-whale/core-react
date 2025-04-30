import type { Whale } from "lib/apiTypes";
import WhaleRow from "./WhaleRow";

type Props = {
  whales: Whale[];
};

const WhaleTable = ({ whales }: Props) => {
  const orderedWhales = whales.toSorted((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex flex-col gap-3 p-3 shadow-md">
      <h2 className="text-lg font-semibold">Recent Sightings</h2>
      <table className="min-w-full">
        <thead className="border-b bg-gray-300 sticky top-0">
          <tr>
            <th></th>
            <th className="font-semibold py-2 px-3 text-left">Name</th>
            <th className="font-semibold py-2 px-3 text-left">Species</th>
            <th className="font-semibold py-2 px-3 text-left">Location</th>
          </tr>
        </thead>
        <tbody>
          {orderedWhales.map((whale, index) => (
            <WhaleRow key={index} whale={whale} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WhaleTable;
