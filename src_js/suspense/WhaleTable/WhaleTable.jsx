import { use, useEffect, useState } from "react";
import WhaleRow from "./WhaleRow";
import LoadingSpinner from "src_js/deferred_updates/LoadingSpinner";
import ErrorFallback from "../Suspense/ErrorFallback";

const WhaleTable = ({ query, whalesPromise }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [whales, setWhales] = useState([]);
  const orderedWhales = whales.toSorted((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    const loadWhales = async () => {
      setError(false);
      setLoading(true);
      try {
        const whales = await whalesPromise;
        setWhales(whales);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    loadWhales();
  }, [whalesPromise]);

  return loading ? (
    <LoadingSpinner />
  ) : error ? (
    <ErrorFallback />
  ) : (
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
          <WhaleRow key={index} query={query} whale={whale} />
        ))}
      </tbody>
    </table>
  );
};

export default WhaleTable;
