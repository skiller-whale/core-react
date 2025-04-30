import { useEffect, useState } from "react";

const useFetchJson = <Data,>(url: string): Data[] => {
  const [data, setData] = useState<Data[]>([]);

  // TODO: fetch data from API

  return data;
};

export default useFetchJson;
