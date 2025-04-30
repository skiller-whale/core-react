import type { Whale } from "lib/apiTypes";

type Props = {
  whales: Whale[];
};

const WhalesTable = ({ whales }: Props) => (
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
      {whales.map((whale) => (
        <WhaleRow key={whale.id} whale={whale} />
      ))}
    </tbody>
  </table>
);

type WhaleRowProps = {
  whale: Whale;
};

const WhaleRow = ({ whale }: WhaleRowProps) => (
  <tr className="border-b even:bg-gray-100">
    <td className="py-2 px-3 text-2xl text-center">
      {whale.species.includes("Dolphin") ? "🐬" : "🐳"}
    </td>
    <td className="py-2 px-3">{whale.name}</td>
    <td className="py-2 px-3">{whale.species}</td>
    <td className="py-2 px-3">
      ({whale.location?.x}, {whale.location?.y})
    </td>
  </tr>
);

export default WhalesTable;
