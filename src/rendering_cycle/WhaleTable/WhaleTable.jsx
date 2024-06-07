import WhaleRow from "./WhaleRow";

const WhaleTable = ({ whales }) => {
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
