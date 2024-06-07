import WhalesTableRow from "./WhalesTableRow";

const WhalesTable = ({ whales }) => (
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
      {whales.map((whale) =>
        WhalesTableRow(whale.name, whale.species, whale.location),
      )}
    </tbody>
  </table>
);

export default WhalesTable;
