import { useEffect, useState } from "react";
import type { Fish } from "lib/apiTypes";
import useFetchJson from "./useFetchJson";

type Props = {
  term: string;
};

const FishTable = ({ term }: Props) => {
  const [fish, setFish] = useState<Fish[]>([]);

  const fetchFish = async () => {
    const response = await fetch(`/api/fish?term=${term}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const { animals } = await response.json();
    setFish(animals);
  };

  useEffect(() => {
    setFish([]);
    fetchFish();
  }, [term]);

  const rows = fish.map((f) => {
    return (
      <tr className="border-b even:bg-gray-100" key={f.id}>
        <td className="py-2 px-3 text-4xl text-center">🐠</td>
        <td className="py-2 px-3 flex justify-between items-baseline">{`${f.name} the ${f.species}`}</td>
        <td className="py-2 px-3 text-4xl text-center">
          {f.isSaltwater ? "🌊" : "🏞️"}
        </td>
      </tr>
    );
  });

  return (
    <div className="basis-6/12">
      <h2 className="text-2xl font-semibold mb-2">List of fish</h2>
      <table className="min-w-full">
        <thead className="border-b bg-gray-300 sticky top-0">
          <tr>
            <th className="w-36 grow-0 font-semibold py-2 px-3 text-center">
              Profile picture
            </th>
            <th className="font-semibold py-2 px-3 text-left">Name</th>
            <th className="w-36 grow-0 font-semibold py-2 px-3 text-center">
              Is Saltwater?
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default FishTable;
