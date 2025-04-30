import { type ReactNode, useEffect, useState } from "react";

type Props<Data> = {
  url: string;
  children: (data: Data[]) => ReactNode;
};

const JsonFetcher = <Data,>({ url, children }: Props<Data>) => {
  const [data, setData] = useState<Data[]>([]);

  // TODO: fetch data from API

  return children(data);
};

export default JsonFetcher;
